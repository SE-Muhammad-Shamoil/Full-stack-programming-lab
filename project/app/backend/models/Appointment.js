const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true }, // e.g. YYYY-MM-DD
  time: { type: String, required: true }, // e.g. 10:00 AM
  reason: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['Pending', 'Confirmed', 'In Treatment', 'Completed', 'Rejected'], 
    default: 'Pending' 
  },
  notes: { type: String } // optional notes by doctor after consultation
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
