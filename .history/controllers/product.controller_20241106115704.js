const ProductModel = require('../models/product.model')

module.exports.creteProduct = async (req, res) => {
    try {
        const { model, price, color, size, code } = req.body

        if (!model || !price || !color || !size || !code) {
            res.status(400).json({
                message: 'The (model, price, color, size, code) are required.',
            })
        }

        if (typeof price !== 'number' || price <= 0) {
            res.status(400).json({
                message: 'Price must be a number.',
            })
        }

        const product = await ProductModel.create({
            model,
            price,
            color,
            size,
            code,
        })
        await product.save()
        res.status(200).json({ product })
    } catch (error) {
        console.log(error)
    }
}

module.exports.listProduct = async (req, res) => {
    try {
        const products = await ProductModel.find().lean()
    } catch (error) {
        console.log(error)
    }
}
