const OrderModel = require('../models/order.model')

module.exports.createOrder = async (req, res) => {
    try {
        const {
            clientName,
            phone,
            productName,
            price,
            size,
            code,
            avans,
            qoldiq,
            address,
            startDate,
            endDate,
        } = req.body

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

        const order = await OrderModel.create({
            model,
            price,
            color,
            size,
            code,
        })
        await order.save()
        res.status(200).json({ order })
    } catch (error) {
        console.log(error)
    }
}

module.exports.listOrder = async (req, res) => {
    try {
        const orders = await OrderModel.find().lean()
        res.status(200).json({ orders })
    } catch (error) {
        console.log(error)
    }
}

const getById = async (id) => {
    try {
        const order = await OrderModel.findById(id)
        if (!order) {
            res.status(404).json({ message: 'Order is not defined' })
        }

        return order
    } catch (error) {
        console.log(error)
    }
}

module.exports.updateOrder = async (req, res) => {
    try {
        const { id, model, price, color, size, code } = req.body
        const order = await getById(id)

        const updateOrder = await OrderModel.updateOne({
            _id: id,
            model: model || order.model,
            price: price || order.price,
            color: color || order.color,
            size: size || order.size,
            code: code || order.code,
        })

        res.status(200).json({ message: 'Updated' })
    } catch (error) {
        console.log(error)
    }
}

module.exports.deleteOrder = async (req, res) => {
    try {
        const { id } = req.body
        await getById(id)

        await OrderModel.findByIdAndDelete(id)
        res.status(200).json({ message: 'Success' })
    } catch (error) {
        console.log(error)
    }
}
