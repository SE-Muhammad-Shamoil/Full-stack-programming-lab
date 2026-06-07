const User = require('../models/User');
const PatientProfile = require('../models/PatientProfile');

// @desc    Get all patients
// @route   GET /api/patients
// @access  Private/Admin/Doctor
const getPatients = async (req, res) => {
  try {
    const patients = await PatientProfile.find()
      .populate('user', 'name email role')
      .populate('assignedDoctor', 'name email');
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get patient by ID
// @route   GET /api/patients/:id
// @access  Private
const getPatientById = async (req, res) => {
  try {
    const patient = await PatientProfile.findById(req.params.id)
      .populate('user', 'name email role')
      .populate('assignedDoctor', 'name email');
    if (patient) {
      res.json(patient);
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create patient profile
// @route   POST /api/patients
// @access  Private
const createPatientProfile = async (req, res) => {
  const { user, age, medicalHistory, assignedDoctor } = req.body;
  
  try {
    const profileExists = await PatientProfile.findOne({ user });
    if (profileExists) {
      return res.status(400).json({ message: 'Patient profile already exists for this user' });
    }

    const patientProfile = await PatientProfile.create({
      user,
      age,
      medicalHistory,
      assignedDoctor
    });

    res.status(201).json(patientProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update patient profile
// @route   PUT /api/patients/:id
// @access  Private
const updatePatientProfile = async (req, res) => {
  const { age, medicalHistory, assignedDoctor } = req.body;

  try {
    const patientProfile = await PatientProfile.findById(req.params.id);

    if (!patientProfile) {
      return res.status(404).json({ message: 'Patient profile not found' });
    }

    patientProfile.age = age || patientProfile.age;
    patientProfile.medicalHistory = medicalHistory || patientProfile.medicalHistory;
    patientProfile.assignedDoctor = assignedDoctor || patientProfile.assignedDoctor;

    const updatedProfile = await patientProfile.save();
    res.json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete patient profile
// @route   DELETE /api/patients/:id
// @access  Private/Admin
const deletePatientProfile = async (req, res) => {
  try {
    const patientProfile = await PatientProfile.findById(req.params.id);

    if (patientProfile) {
      await patientProfile.deleteOne();
      res.json({ message: 'Patient profile removed' });
    } else {
      res.status(404).json({ message: 'Patient profile not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get my patient profile
// @route   GET /api/patients/me/profile
// @access  Private
const getMyPatientProfile = async (req, res) => {
  try {
    const profile = await PatientProfile.findOne({ user: req.user._id })
      .populate('user', 'name email role')
      .populate('assignedDoctor', 'name email specialty');

    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ message: 'Patient profile not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getPatients, getPatientById, createPatientProfile, updatePatientProfile, deletePatientProfile, getMyPatientProfile };
