const express = require('express');
const router = express.Router();
const { getAppointments, createAppointment, updateAppointment, deleteAppointment, getDoctorAvailability } = require('../controllers/appointmentController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, getAppointments)
  .post(protect, createAppointment);

router.route('/doctor/:id/availability')
  .get(protect, getDoctorAvailability);

router.route('/:id')
  .put(protect, updateAppointment)
  .delete(protect, admin, deleteAppointment);

module.exports = router;
