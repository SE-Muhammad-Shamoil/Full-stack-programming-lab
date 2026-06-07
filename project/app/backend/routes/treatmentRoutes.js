const express = require('express');
const router = express.Router();
const { addCheckup, updateProgress, getHistory } = require('../controllers/treatmentController');
const { protect, doctor } = require('../middleware/authMiddleware');

router.post('/checkup', protect, doctor, addCheckup);
router.post('/progress', protect, doctor, updateProgress);
router.get('/history/:patientId', protect, getHistory);

module.exports = router;
