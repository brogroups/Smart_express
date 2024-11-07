const PayedModel = require('../models/firma/payed.model')
const FirmaModel = require('../models/firma/firma.model')

module.exports.createPayment = async (req, res) => {
    try {
        const { firmaId, amount, paymentDate, paymentMethod } = req.body

        if (!firmaId || !amount || !paymentDate || !paymentMethod) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        const firma = await FirmaModel.findOne({ _id: firmaId }).populate(
            'payments'
        )
        if (!firma) {
            res.status(404).json({ message: 'Firma is not found' })
        }

        const newPayment = await PayedModel.create({
            firmaId,
            amount,
            paymentDate,
            paymentMethod,
        })

        await firma.payments.push(newPayment._id)
        await firma.save()
        await newPayment.save()
        res.status(201).json({ newPayment })
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}

module.exports.listPayment = async (req, res) => {
    try {
        const payments = await PayedModel.find()
        res.status(200).json({ payments })
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}

module.exports.updatePayment = async (req, res) => {
    try {
        const { id, firmaId, amount, paymentDate, paymentMethod } = req.body
        const payment = await getById(id)

        await PayedModel.updateOne({
            _id: id,
            amount: amount || payment.amount,
            paymentDate: paymentDate || payment.paymentMethod,
        })
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

const getById = async (id) => {
    try {
        const firma = await FirmaModel.findById(id)
        if (!firma) {
            res.status(404).json({ message: 'NOt Found Payed' })
        }

        return firma
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}
