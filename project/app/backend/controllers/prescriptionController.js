const Prescription = require('../models/Prescription');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

// @desc    Get prescriptions
// @route   GET /api/prescriptions
// @access  Private
const getPrescriptions = async (req, res) => {
  try {
    let filter = {};
    if (req.user.role === 'Patient') {
      filter.patient = req.user._id;
    } else if (req.user.role === 'Doctor') {
      filter.doctor = req.user._id;
    }

    const prescriptions = await Prescription.find(filter)
      .populate('patient', 'name email')
      .populate('doctor', 'name email')
      .populate('appointment', 'date reason');
      
    res.json(prescriptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create prescription
// @route   POST /api/prescriptions
// @access  Private/Doctor/Admin
const createPrescription = async (req, res) => {
  const { patient, appointment, medicationName, dosage, frequency, duration, notes } = req.body;
  
  try {
    const prescription = await Prescription.create({
      patient,
      doctor: req.user.role === 'Doctor' ? req.user._id : req.body.doctor,
      appointment,
      medicationName,
      dosage,
      frequency,
      duration,
      notes
    });

    try {
      const patientUser = await User.findById(patient);
      if (patientUser) {
          await sendEmail({
            email: patientUser.email,
            subject: 'New Prescription & Medication Reminder - lifeCore',
            message: `Dear ${patientUser.name}, a new prescription for ${medicationName} has been added. Dosage: ${dosage}. Frequency: ${frequency}. Duration: ${duration}. Please remember to take your medication as prescribed.`,
            html: `
<div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
  <div style="background: linear-gradient(135deg, #0051d5, #4fdbc8); padding: 30px 20px; text-align: center;">
    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">lifeCore</h1>
    <p style="margin: 5px 0 0; color: rgba(255,255,255,0.9); font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Concierge Medical</p>
  </div>
  
  <div style="padding: 40px 30px; background-color: #ffffff;">
    <h2 style="color: #1a1f36; margin: 0 0 20px; font-size: 22px; font-weight: 600;">New Prescription Added</h2>
    
    <p style="color: #3c4257; font-size: 16px; line-height: 1.6; margin: 0 0 25px;">
      Dear <strong>${patientUser.name}</strong>,
      <br><br>
      A new prescription has been added to your medical profile by your doctor.
    </p>
    
    <div style="background-color: #f7f9fb; border-radius: 8px; padding: 20px; border-left: 4px solid #0051d5; margin-bottom: 30px;">
      <h3 style="margin: 0 0 15px; color: #1a1f36; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Medication Details</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #697386; font-size: 15px; border-bottom: 1px solid #eaeaea; width: 120px;">Medication:</td>
          <td style="padding: 8px 0; color: #1a1f36; font-size: 15px; font-weight: 600; border-bottom: 1px solid #eaeaea;">${medicationName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #697386; font-size: 15px; border-bottom: 1px solid #eaeaea;">Dosage:</td>
          <td style="padding: 8px 0; color: #1a1f36; font-size: 15px; font-weight: 600; border-bottom: 1px solid #eaeaea;">${dosage}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #697386; font-size: 15px; border-bottom: 1px solid #eaeaea;">Frequency:</td>
          <td style="padding: 8px 0; color: #1a1f36; font-size: 15px; font-weight: 600; border-bottom: 1px solid #eaeaea;">${frequency}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #697386; font-size: 15px;">Duration:</td>
          <td style="padding: 8px 0; color: #1a1f36; font-size: 15px; font-weight: 600;">${duration}</td>
        </tr>
      </table>
    </div>
    
    <p style="color: #697386; font-size: 14px; line-height: 1.5; margin: 0;">
      Please remember to take your medication exactly as prescribed. If you have any questions or experience side effects, contact your care team immediately.
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

    res.status(201).json(prescription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete prescription
// @route   DELETE /api/prescriptions/:id
// @access  Private/Admin
const deletePrescription = async (req, res) => {
  try {
    const prescription = await Prescription.findById(req.params.id);

    if (prescription) {
      await prescription.deleteOne();
      res.json({ message: 'Prescription removed' });
    } else {
      res.status(404).json({ message: 'Prescription not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getPrescriptions, createPrescription, deletePrescription };
