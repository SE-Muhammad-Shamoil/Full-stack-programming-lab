const mongoose = require('mongoose');

const treatmentProgressSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
  visitType: { type: String, enum: ['Initial', 'Follow-up', 'Routine Check'], default: 'Initial' },
  progressNotes: { type: String, required: true },
  status: { type: String, enum: ['Improving', 'Stable', 'Deteriorating', 'Resolved'], default: 'Stable' },
  nextFollowUpDate: { type: String } // e.g. YYYY-MM-DD
}, { timestamps: true });

module.exports = mongoose.model('TreatmentProgress', treatmentProgressSchema);
