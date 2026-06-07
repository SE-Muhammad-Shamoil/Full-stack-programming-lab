const mongoose = require('mongoose');

const doctorProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  specialty: { type: String, required: true },
  schedule: [{
    day: { type: String, required: true }, // e.g. "Monday"
    slots: [{ type: String }] // e.g. ["09:00 AM", "09:30 AM"]
  }],
  contactInfo: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('DoctorProfile', doctorProfileSchema);
