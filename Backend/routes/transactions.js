const router = require('express').Router();
const Transaction = require('../models/Transaction');

// Get all
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get one
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id.trim();
        const transaction = await Transaction.findOne({ _id: id });
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Create
router.post('/', async (req, res) => {
    try {
        const transaction = new Transaction({
            amount: escape(req.body.amount),
            type: escape(req.body.type),
            item: escape(req.body.item)
        });
        await transaction.save();
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).send(error);
    }
});

// delete
router.delete('/:id', async (req, res) => {
    try {
        await Transaction.findOneAndDelete({ _id: req.params.id.trim() });
        res.status(200).json('Transaction Deleted');
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;