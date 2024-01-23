const { ObjectId } = require('mongodb'); // Assuming you are using MongoDB and need ObjectId

const updateAvailableMoney = async (amount) => {
    try {
        const availableMoney = await db.collection('available_money').findOne({});
        const updatedAvailableMoney = availableMoney.amount + amount;
        await db.collection('available_money').updateOne({}, { $set: { amount: updatedAvailableMoney } });
    } catch (error) {
        console.error('Server error updating available money:', error);
    }
};

const getAvailableMoney = async (req, res) => {
    try {
        const availableMoney = await db.collection('available_money').findOne({});
        res.status(200).json({ message: 'Available money fetched successfully', data: availableMoney.amount });
    } catch (error) {
        res.status(500).json({ message: 'Server error fetching available money', error });
    }
};

  const addInvestment = async (req, res) => {
    try {
        const investment = req.body;
        const result = await db.collection('investments').insertOne(investment);
        res.status(201).json({ message: 'Investment added successfully', data: result.ops[0] });
    } catch (error) {
        res.status(500).json({ message: 'Server error adding investment', error });
    }
};

const getInvestments = async (req, res) => {
    try {
        const investments = await db.collection('investments').find({}).toArray();
        res.status(200).json({ message: 'Investments fetched successfully', data: investments });
    } catch (error) {
        res.status(500).json({ message: 'Server error fetching investments', error });
    }
};

const updateInvestment = async (req, res) => {
    try {
        const investmentId = req.params.id;
        const updatedInvestment = req.body;
        const result = await db.collection('investments').updateOne({ _id: ObjectId(investmentId) }, { $set: updatedInvestment });
        if (result.modifiedCount === 1) {
            res.status(200).json({ message: 'Investment updated successfully', data: updatedInvestment });
        } else {
            res.status(404).json({ message: 'Investment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error updating investment', error });
    }
};

const deleteInvestment = async (req, res) => {
    try {
        const investmentId = req.params.id;
        const result = await db.collection('investments').deleteOne({ _id: ObjectId(investmentId) });
        if (result.deletedCount === 1) {
            res.status(200).json({ message: 'Investment deleted successfully' });
        } else {
            res.status(404).json({ message: 'Investment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error deleting investment', error });
    }
};

const addIncome = async (req, res) => {
    try {
        const income = req.body;
        const result = await db.collection('incomes').insertOne(income);
        res.status(201).json({ message: 'Income added successfully', data: result.ops[0] });
    } catch (error) {
        res.status(500).json({ message: 'Server error adding income', error });
    }
};

const getIncomes = async (req, res) => {
    try {
        const incomes = await db.collection('incomes').find({}).toArray();
        res.status(200).json({ message: 'Incomes fetched successfully', data: incomes });
    } catch (error) {
        res.status(500).json({ message: 'Server error fetching incomes', error });
    }
};

const updateIncome = async (req, res) => {
    try {
        const incomeId = req.params.id;
        const updatedIncome = req.body;
        const result = await db.collection('incomes').updateOne({ _id: ObjectId(incomeId) }, { $set: updatedIncome });
        if (result.modifiedCount === 1) {
            res.status(200).json({ message: 'Income updated successfully', data: updatedIncome });
        } else {
            res.status(404).json({ message: 'Income not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error updating income', error });
    }
};

const deleteIncome = async (req, res) => {
    try {
        const incomeId = req.params.id;
        const result = await db.collection('incomes').deleteOne({ _id: ObjectId(incomeId) });
        if (result.deletedCount === 1) {
            res.status(200).json({ message: 'Income deleted successfully' });
        } else {
            res.status(404).json({ message: 'Income not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error deleting income', error });
    }
};

module.exports = {
    updateAvailableMoney,
    getAvailableMoney,
    addInvestment,
    getInvestments,
    updateInvestment,
    deleteInvestment,
    addIncome,
    getIncomes,
    updateIncome,
    deleteIncome,
};
