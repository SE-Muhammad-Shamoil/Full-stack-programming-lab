const PhysicalCheckup = require('../models/PhysicalCheckup');
const TreatmentProgress = require('../models/TreatmentProgress');
const Appointment = require('../models/Appointment');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

// @desc    Add a physical checkup record
// @route   POST /api/treatments/checkup
// @access  Private/Doctor
const addCheckup = async (req, res) => {
  const { patient, appointment, height, weight, bloodPressure, heartRate, temperature, generalNotes } = req.body;
  try {
    const checkup = await PhysicalCheckup.create({
      doctor: req.user._id,
      patient,
      appointment,
      height,
      weight,
      bloodPressure,
      heartRate,
      temperature,
      generalNotes
    });
    res.status(201).json(checkup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update treatment progress
// @route   POST /api/treatments/progress
// @access  Private/Doctor
const updateProgress = async (req, res) => {
  const { patient, appointment, visitType, progressNotes, status, nextFollowUpDate } = req.body;
  try {
    const progress = await TreatmentProgress.create({
      doctor: req.user._id,
      patient,
      appointment,
      visitType,
      progressNotes,
      status,
      nextFollowUpDate
    });

    // Optionally update appointment status to 'In Treatment' or 'Completed'
    if (appointment) {
      await Appointment.findByIdAndUpdate(appointment, { status: 'In Treatment' });
    }

    if (nextFollowUpDate) {
      try {
        const patientUser = await User.findById(patient);
        if (patientUser) {
          await sendEmail({
            email: patientUser.email,
            subject: 'Follow-up Visit Reminder - lifeCore',
            message: `Dear ${patientUser.name}, this is a reminder for your next follow-up visit scheduled on ${nextFollowUpDate}. Please ensure you book an appointment for this date if you haven't already.`,
            html: `
<div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
  <div style="background: linear-gradient(135deg, #0051d5, #4fdbc8); padding: 30px 20px; text-align: center;">
    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">lifeCore</h1>
    <p style="margin: 5px 0 0; color: rgba(255,255,255,0.9); font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Concierge Medical</p>
  </div>
  
  <div style="padding: 40px 30px; background-color: #ffffff;">
    <h2 style="color: #1a1f36; margin: 0 0 20px; font-size: 22px; font-weight: 600;">Follow-up Visit Reminder</h2>
    
    <p style="color: #3c4257; font-size: 16px; line-height: 1.6; margin: 0 0 25px;">
      Dear <strong>${patientUser.name}</strong>,
      <br><br>
      This is a reminder from your care team that you have a follow-up visit recommended.
    </p>
    
    <div style="background-color: #f7f9fb; border-radius: 8px; padding: 20px; border-left: 4px solid #4fdbc8; margin-bottom: 30px;">
      <h3 style="margin: 0 0 10px; color: #1a1f36; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Recommended Date</h3>
      <p style="margin: 0; font-size: 18px; font-weight: bold; color: #0051d5;">${nextFollowUpDate}</p>
    </div>
    
    <p style="color: #697386; font-size: 14px; line-height: 1.5; margin: 0;">
      Please log into your lifeCore portal to book an appointment for this date if you haven't already. We look forward to continuing your care.
    </p>
  </div>
  
  <div style="background-color: #f7f9fb; padding: 20px; text-align: center; border-top: 1px solid #eaeaea;">
    <p style="margin: 0; color: #a3acb9; font-size: 12px;">
      &copy; ${new Date().getFullYear()} lifeCore Concierge. All rights reserved.<br>
      Confidentiality Notice: This email contains privileged medical information.
    </p>
  </div>
</div>
            `
          });
        }
      } catch (emailErr) {
        console.error('Email error:', emailErr);
      }
    }

    res.status(201).json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get medical history for a patient
// @route   GET /api/treatments/history/:patientId
// @access  Private
const getHistory = async (req, res) => {
  try {
    const patientId = req.params.patientId;
    const checkups = await PhysicalCheckup.find({ patient: patientId }).populate('doctor', 'name').sort('-createdAt');
    const progress = await TreatmentProgress.find({ patient: patientId }).populate('doctor', 'name').sort('-createdAt');
    
    res.json({ checkups, progress });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addCheckup, updateProgress, getHistory };
