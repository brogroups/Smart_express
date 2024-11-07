const SalesModel = require('../models/firma/sales-product.model')

module.exports.createSales = (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.listSales = (res, req) => {}
