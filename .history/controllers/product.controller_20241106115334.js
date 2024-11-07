const ProductModel = require('../models/product.model')

module.exports.creteProduct = async (req, res) => {
    try {
        const { model, price, color, size, code } = req.body

        if (!model || !price || !color || !size || !code) {
            return res.status(400).json({
                message: 'The (model, price, color, size, code) are required.',
            })
        }

        if (typeof price !== 'number' || price <= 0) {
            return res
                .status(400)
                .json({ message: 'Price must be a positive number.' })
        }
    } catch (error) {
        console.log(error)
    }
}
