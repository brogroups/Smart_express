const SalesModel = require('../models/firma/sales-product.model')
const FirmaModel = require('../models/firma/firma.model')

module.exports.createSales = async (req, res) => {
    try {
        const { name, price, quantity, firmaId, status } = req.body
        if (!name || !price || !quantity || !firmaId || !status) {
            res.status(400).json({ message: 'Put all lines' })
        }

        const firma = await FirmaModel.findOne({ _id: firmaId }).populate(
            'saleProducts'
        )
        if (!firma) {
            res.status(404).json({ message: 'Firma not found' })
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

        await firma.saleProducts.push(newSalesProduct._id)
        await firma.save()
        await newSalesProduct.save()
        res.status(200).json({ newSalesProduct })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.listSales = async (res, req) => {
    try {
        const saleProducts = await SalesModel.find()
        res.status('200').json({ saleProducts })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.updateSales = async (res, req) => {
    try {
        const { id, name, price, quantity, status } = req.body

        const saleProduct = await getById(id)

        await SalesModel.updateOne({
            _id: id,
            name: name || saleProduct.name,
            price: price || saleProduct.price,
            quantity: quantity || saleProduct.quantity,
            status: status || saleProduct.status,
        })

        rse.status(200).json({ message: '' })
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

const getById = async (id) => {
    try {
        const saleProduct = await SalesModel.findOne({ _id: id })
        if (!saleProduct) {
            res.status(404).json({ message: 'Sales not found' })
        }

        return saleProduct
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}
