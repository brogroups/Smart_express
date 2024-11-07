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
        res.status(200).json({ products })
    } catch (error) {
        console.log(error)
    }
}

const getById = async (id) => {
    try {
        const product = await ProductModel.findById(id)
        if (!product) {
            res.status(404).json({ message: 'Product is not defined' })
        }

        return product
    } catch (error) {
        console.log(error)
    }
}

module.exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.body
        const product = await getById(id)

        await ProductModel.findByIdAndUpdate(
            id,
            {
                model: req.model || product.model,
                price: req.price || product.price,
                color: req.color || product.color,
                size: req.size || product.size,
                code: req.code || product.code,
            },
            { new: true }
        )
    } catch (error) {
        console.log(error)
    }
}

module.exports.deleteProduct = async (req, res) => {
    try {
    } catch (error) {
        console.log(error)
    }
}
