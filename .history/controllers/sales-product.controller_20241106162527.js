const SalesModel = require('../models/firma/sales-product.model')

module.exports.createSales = (req, res) => {
    try {
        const {
            name,
            price,
            quantity,
            firmaName,
            firmaId,
            status,
        } = req.body
        if (!name || !price || !quantity || totalPrice || firmaId || status) {
            res.status(400).json({ message: 'Put all lines' })
        }

        const newSalesProduct = await SalesModel.create({
            name,
            price,
            quantity,
            totalPrice
        })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.listSales = (res, req) => {
    try {
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.updateSales = (res, req) => {
    try {
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.deleteSales = (res, req) => {
    try {
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}
