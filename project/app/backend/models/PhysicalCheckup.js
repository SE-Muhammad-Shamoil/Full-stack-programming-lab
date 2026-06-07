const mongoose = require('mongoose');

const physicalCheckupSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
  height: { type: String }, // e.g., '180 cm'
  weight: { type: String }, // e.g., '75 kg'
  bloodPressure: { type: String }, // e.g., '120/80 mmHg'
  heartRate: { type: String }, // e.g., '72 bpm'
  temperature: { type: String }, // e.g., '98.6 F'
  generalNotes: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('PhysicalCheckup', physicalCheckupSchema);
