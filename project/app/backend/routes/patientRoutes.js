const express = require('express');
const router = express.Router();
const { getPatients, getPatientById, createPatientProfile, updatePatientProfile, deletePatientProfile, getMyPatientProfile } = require('../controllers/patientController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, getPatients)
  .post(protect, createPatientProfile);

// MUST be placed before /:id so it doesn't match 'me' as an id
router.route('/me/profile')
  .get(protect, getMyPatientProfile);

router.route('/:id')
  .get(protect, getPatientById)
  .put(protect, updatePatientProfile)
  .delete(protect, admin, deletePatientProfile);

module.exports = router;
