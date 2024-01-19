const express = require('express');
const router = express.Router();
const { deductInvestment, deductIncome } = require('../controllers/deduct.controller');

router.post('/investment', deductInvestment);
router.post('/income', deductIncome);

module.exports = router;