const FirmaModel = require('../models/firma/firma.model')

module.exports.createFirma = async (req, res) => {
    try {
        const {
            firma,
            manager,
            phone,
            email,
            moneyType,
            address,
            date,
            debts,
        } = req.boy
        if (
            !firma ||
            !manager ||
            !phone ||
            !email ||
            moneyType ||
            !address ||
            !debts
        ) {
            res.status(400).json({ message: 'Put all lines' })
        }

        const newFirma = await FirmaModel.create({
            firma,
            phone,
            manager,
            email,
            moneyType,
            address,
            active,
            debts,
        })
        await newFirma.save()

        res.status(201).json({ newFirma })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.listFirma = async (req, res) => {
    try {
        const firms = await FirmaModel.find()
            .lean()
            .populate('saleProducts', 'history')
        res.status(200).json({ firms })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.updateFirma = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.deleteFirma = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

const getById = async (id) => {}
