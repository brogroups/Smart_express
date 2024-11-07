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

        const firma = await FirmaModel.create({
            firma,
            phone,
            manager,
            email,
            moneyType,
            address,
            active,
            debts,
        })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.createFirma = (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.createFirma = (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.createFirma = (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}
