const mongoose = require('mongoose');

const patientProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  age: { type: Number, required: true },
  medicalHistory: { type: String }, // General notes
  bloodType: { type: String, default: 'Not specified' },
  allergies: [{ type: String }],
  chronicIllnesses: [{ type: String }],
  pastSurgeries: [{ type: String }],
  familyHistory: { type: String, default: 'Not specified' },
  assignedDoctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // reference to a doctor User
}, { timestamps: true });

module.exports = mongoose.model('PatientProfile', patientProfileSchema);
