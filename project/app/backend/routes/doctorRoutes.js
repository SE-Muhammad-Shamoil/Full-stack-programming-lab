const express = require('express');
const router = express.Router();
const { getDoctors, getDoctorById, createDoctorProfile, updateDoctorProfile, deleteDoctorProfile } = require('../controllers/doctorController');
const { protect, admin, doctor } = require('../middleware/authMiddleware');

router.route('/')
  .get(getDoctors)
  .post(protect, admin, createDoctorProfile);

router.route('/:id')
  .get(getDoctorById)
  .put(protect, doctor, updateDoctorProfile) // doctor or admin can update
  .delete(protect, admin, deleteDoctorProfile);

module.exports = router;
