const SalesModel = require('../models/firma/sales-product.model')

module.exports.createSales = async (req, res) => {
    try {
        const { name, price, quantity, firmaId, status } = req.body
        if (!name || !price || !quantity || !firmaId || !status) {
            res.status(400).json({ message: 'Put all lines' })
        }

        const tt = price * quantity
        const newSalesProduct = await SalesModel.create({
            name,
            price,
            quantity,
            totalPrice: tt,
            firmaId,
            status,
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
