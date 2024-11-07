const ProductModel = require('../models/product.model')

module.exports.creteProduct = async (req, res) => {
    try {
        const { model, price, color, size, code } = req.body
    } catch (error) {
        console.log(error)
    }
}
