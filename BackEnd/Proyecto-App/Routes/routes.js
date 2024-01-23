const express = require('express');
const router = express.Router();
const incomesController = require('../Controladores/controllers.js');
const investmentsController = require('../Controladores/controllers.js');

router.post('/incomes', incomesController.addIncome);
router.get('/incomes', incomesController.getIncomes);
router.put('/incomes', incomesController.updateIncome);
router.delete('/incomes', incomesController.deleteIncome);

router.post('/investments', investmentsController.addInvestment);
router.get('/investments', investmentsController.getInvestments);
router.put('/investments', investmentsController.updateInvestment);
router.delete('/investments', investmentsController.deleteInvestment);

module.exports = router;
