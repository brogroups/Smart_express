const PayedModel = require('../models/firma/payed.model')

module.exports.createPayment = async (req, res) => {
    try {
        const { firmaId, amount, paymentDate, paymentMethod } = req.body

        if (!firmaId || !amount || !paymentDate || !paymentMethod) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        const newPayment = await PayedModel.create({
            firmaId,
            amount,
            paymentDate,
            paymentMethod,
        })

        const payment = await newPayment.save()
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}

module.exports.listPayment = (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}

module.exports.updatePayment = (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}

module.exports.deletePayment = (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}
