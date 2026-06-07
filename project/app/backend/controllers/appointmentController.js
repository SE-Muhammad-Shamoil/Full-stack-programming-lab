const Appointment = require('../models/Appointment');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

const generateEmailHTML = (title, patientName, date, time, statusMsg) => `
<div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
  <div style="background: linear-gradient(135deg, #0051d5, #4fdbc8); padding: 30px 20px; text-align: center;">
    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">lifeCore</h1>
    <p style="margin: 5px 0 0; color: rgba(255,255,255,0.9); font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Concierge Medical</p>
  </div>
  
  <div style="padding: 40px 30px; background-color: #ffffff;">
    <h2 style="color: #1a1f36; margin: 0 0 20px; font-size: 22px; font-weight: 600;">${title}</h2>
    
    <p style="color: #3c4257; font-size: 16px; line-height: 1.6; margin: 0 0 25px;">
      Dear <strong>${patientName}</strong>,
      <br><br>
      ${statusMsg}
    </p>
    
    <div style="background-color: #f7f9fb; border-radius: 8px; padding: 20px; border-left: 4px solid #0051d5; margin-bottom: 30px;">
      <h3 style="margin: 0 0 15px; color: #1a1f36; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Appointment Details</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #697386; font-size: 15px; width: 100px;">Date:</td>
          <td style="padding: 8px 0; color: #1a1f36; font-size: 15px; font-weight: 600;">${date}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #697386; font-size: 15px;">Time:</td>
          <td style="padding: 8px 0; color: #1a1f36; font-size: 15px; font-weight: 600;">${time}</td>
        </tr>
      </table>
    </div>
    
    <p style="color: #697386; font-size: 14px; line-height: 1.5; margin: 0;">
      If you need to make changes to your appointment or have any questions, please log into your lifeCore portal. We look forward to providing you with world-class care.
    </p>
  </div>
  
  <div style="background-color: #f7f9fb; padding: 20px; text-align: center; border-top: 1px solid #eaeaea;">
    <p style="margin: 0; color: #a3acb9; font-size: 12px;">
      &copy; ${new Date().getFullYear()} lifeCore Concierge. All rights reserved.<br>
      Confidentiality Notice: This email contains privileged medical information.
    </p>
  </div>
</div>
`;

// @desc    Get all appointments
// @route   GET /api/appointments
// @access  Private
const getAppointments = async (req, res) => {
  try {
    // Role based fetching
    let filter = {};
    if (req.user.role === 'Patient') {
      filter.patient = req.user._id;
    } else if (req.user.role === 'Doctor') {
      filter.doctor = req.user._id;
    }
    
    const appointments = await Appointment.find(filter)
      .populate('patient', 'name email')
      .populate('doctor', 'name email');
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create an appointment
// @route   POST /api/appointments
// @access  Private
const createAppointment = async (req, res) => {
  const { doctor, date, time, reason } = req.body;
  
  try {
    const patientId = req.user.role === 'Patient' ? req.user._id : req.body.patient;

    // Validation 1: Prevent double-booking the same time slot
    const existingSlot = await Appointment.findOne({
      doctor,
      date,
      time,
      status: { $ne: 'Rejected' }
    });

    if (existingSlot) {
      return res.status(400).json({ message: 'This time slot is already booked. Please choose another time.' });
    }

    // Validation 2: Prevent the same patient from booking multiple slots with the same doctor on the same day
    const existingPatientAppt = await Appointment.findOne({
      patient: patientId,
      doctor,
      date,
      status: { $ne: 'Rejected' }
    });

    if (existingPatientAppt) {
      return res.status(400).json({ message: 'You already have an appointment booked with this doctor on this date.' });
    }

    const appointment = await Appointment.create({
      patient: patientId,
      doctor,
      date,
      time,
      reason,
      status: 'Pending'
    });

    // Send email to patient
    try {
      const patientUser = await User.findById(appointment.patient);
      if (patientUser) {
        await sendEmail({
          email: patientUser.email,
          subject: 'Appointment Requested - lifeCore',
          message: `Your appointment on ${date} at ${time} has been requested and is currently pending.`,
          html: generateEmailHTML(
            'Appointment Requested', 
            patientUser.name, 
            date, 
            time, 
            'We have successfully received your appointment request. It is currently pending review by the clinical staff. You will receive another notification once it is confirmed or if any changes are needed.'
          )
        });
      }
    } catch (emailErr) {
      console.error('Email error:', emailErr);
    }

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update appointment status/notes
// @route   PUT /api/appointments/:id
// @access  Private
const updateAppointment = async (req, res) => {
  const { status, notes } = req.body;

  try {
    const appointment = await Appointment.findById(req.params.id).populate('patient', 'name email');

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    const previousStatus = appointment.status;

    // Role check could go here
    appointment.status = status || appointment.status;
    appointment.notes = notes !== undefined ? notes : appointment.notes;

    const updatedAppointment = await appointment.save();

    // Send email if status changed
    if (status && status !== previousStatus && appointment.patient && appointment.patient.email) {
      try {
        await sendEmail({
          email: appointment.patient.email,
          subject: `Appointment ${status} - lifeCore`,
          message: `Dear ${appointment.patient.name}, your appointment on ${appointment.date} at ${appointment.time} has been marked as ${status}.`,
          html: generateEmailHTML(
            `Appointment ${status}`, 
            appointment.patient.name, 
            appointment.date, 
            appointment.time, 
            `Your appointment status has been updated to <strong>${status}</strong> by our clinical staff. ${notes ? `<br><br><strong>Note from staff:</strong> ${notes}` : ''}`
          )
        });
      } catch (emailErr) {
        console.error('Email error:', emailErr);
      }
    }

    res.json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete appointment
// @route   DELETE /api/appointments/:id
// @access  Private/Admin
const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (appointment) {
      await appointment.deleteOne();
      res.json({ message: 'Appointment removed' });
    } else {
      res.status(404).json({ message: 'Appointment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const DoctorProfile = require('../models/DoctorProfile');

// @desc    Get doctor availability for a specific date
// @route   GET /api/appointments/doctor/:id/availability?date=YYYY-MM-DD
// @access  Private
const getDoctorAvailability = async (req, res) => {
  const doctorId = req.params.id;
  const { date } = req.query; // YYYY-MM-DD

  if (!date) {
    return res.status(400).json({ message: 'Date is required' });
  }

  try {
    // Determine the day of the week
    const dateObj = new Date(date);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[dateObj.getDay()];

    // Get doctor's schedule
    const doctorProfile = await DoctorProfile.findOne({ user: doctorId });
    if (!doctorProfile) {
      return res.status(404).json({ message: 'Doctor profile not found' });
    }

    // Find the schedule for this day
    const daySchedule = doctorProfile.schedule.find(s => s.day === dayOfWeek);
    if (!daySchedule || !daySchedule.slots || daySchedule.slots.length === 0) {
      return res.json({ availableSlots: [] }); // Doctor doesn't work this day
    }

    // Get all appointments for this doctor on this date
    const existingAppointments = await Appointment.find({ doctor: doctorId, date: date });
    
    // Extract booked times
    const bookedTimes = existingAppointments.map(app => app.time);

    // Filter available slots
    const availableSlots = daySchedule.slots.filter(slot => !bookedTimes.includes(slot));

    res.json({ availableSlots });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAppointments, createAppointment, updateAppointment, deleteAppointment, getDoctorAvailability };
