const User = require('../models/User');
const DoctorProfile = require('../models/DoctorProfile');

// @desc    Get all doctors
// @route   GET /api/doctors
// @access  Public
const getDoctors = async (req, res) => {
  try {
    const doctors = await DoctorProfile.find().populate('user', 'name email role');
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get doctor by ID
// @route   GET /api/doctors/:id
// @access  Public
const getDoctorById = async (req, res) => {
  try {
    const doctor = await DoctorProfile.findById(req.params.id).populate('user', 'name email role');
    if (doctor) {
      res.json(doctor);
    } else {
      res.status(404).json({ message: 'Doctor not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create doctor profile
// @route   POST /api/doctors
// @access  Private/Admin
const createDoctorProfile = async (req, res) => {
  const { user, specialty, availability, contactInfo } = req.body;
  
  try {
    const profileExists = await DoctorProfile.findOne({ user });
    if (profileExists) {
      return res.status(400).json({ message: 'Doctor profile already exists for this user' });
    }

    const doctorProfile = await DoctorProfile.create({
      user,
      specialty,
      availability,
      contactInfo
    });

    res.status(201).json(doctorProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update doctor profile
// @route   PUT /api/doctors/:id
// @access  Private/Doctor/Admin
const updateDoctorProfile = async (req, res) => {
  const { specialty, availability, contactInfo } = req.body;

  try {
    const doctorProfile = await DoctorProfile.findById(req.params.id);

    if (!doctorProfile) {
      return res.status(404).json({ message: 'Doctor profile not found' });
    }

    doctorProfile.specialty = specialty || doctorProfile.specialty;
    doctorProfile.availability = availability || doctorProfile.availability;
    doctorProfile.contactInfo = contactInfo || doctorProfile.contactInfo;

    const updatedProfile = await doctorProfile.save();
    res.json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete doctor profile
// @route   DELETE /api/doctors/:id
// @access  Private/Admin
const deleteDoctorProfile = async (req, res) => {
  try {
    const doctorProfile = await DoctorProfile.findById(req.params.id);

    if (doctorProfile) {
      await doctorProfile.deleteOne();
      res.json({ message: 'Doctor profile removed' });
    } else {
      res.status(404).json({ message: 'Doctor profile not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getDoctors, getDoctorById, createDoctorProfile, updateDoctorProfile, deleteDoctorProfile };
