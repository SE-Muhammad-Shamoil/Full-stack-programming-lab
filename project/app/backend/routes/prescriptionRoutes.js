const express = require('express');
const router = express.Router();
const { getPrescriptions, createPrescription, deletePrescription } = require('../controllers/prescriptionController');
const { protect, admin, doctor } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, getPrescriptions)
  .post(protect, doctor, createPrescription);

router.route('/:id')
  .delete(protect, admin, deletePrescription);

module.exports = router;
