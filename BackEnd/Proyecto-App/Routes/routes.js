const express = require('express');
const router = express.Router();
const incomesController = require('../controllers/incomes');
const expensesController = require('../controllers/expenses');
const investmentsController = require('../controllers/investments');

router.post('/incomes', incomesController.addIncome);
router.get('/incomes', incomesController.getIncomes);
router.put('/incomes/:id', incomesController.updateIncome);
router.delete('/incomes/:id', incomesController.deleteIncome);

router.post('/investments', investmentsController.addInvestment);
router.get('/investments', investmentsController.getInvestments);
router.put('/investments/:id', investmentsController.updateInvestment);
router.delete('/investments/:id', investmentsController.deleteInvestment);

module.exports = router;