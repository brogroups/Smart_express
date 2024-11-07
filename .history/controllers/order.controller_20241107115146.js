const OrderModel = require('../models/order.model')
const WorkerModel = require('../models/worker/worker.model')
const WorkerHistory = require('../models/worker/worker-history.model')

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
            color,
            startDate,
            endDate,
            workers,
        } = req.body

        if (
            !clientName ||
            !phone ||
            !productName ||
            !price ||
            !color ||
            !size ||
            !code ||
            !avans ||
            !qoldiq ||
            !address ||
            !startDate ||
            !endDate ||
            !workers ||
            !Array.isArray(workers) ||
            workers.length === 0
        ) {
            return res.status(400).json({
                message:
                    'All fields (clientName, phone, productName, price, size, code, avans, qoldiq, address, startDate, endDate, workers) are required.',
            })
        }

        const workerRefs = await WorkerModel.find({ _id: { $in: workers } })

        if (workerRefs.length !== workers.length) {
            return res.status(400).json({
                message: 'One or more worker references are invalid.',
            })
        }

        const order = await OrderModel.create({
            clientName,
            phone,
            productName,
            price,
            color,
            size,
            code,
            avans,
            qoldiq,
            address,
            startDate,
            endDate,
            workers: workerRefs.map((worker) => worker._id),
        })
        await order.save()
        res.status(200).json({ order })
    } catch (error) {
        console.log(error)
    }
}

module.exports.listOrder = async (req, res) => {
    try {
        const orders = await OrderModel.find().populate('workers')
        res.status(200).json({ orders })
    } catch (error) {
        console.log(error)
    }
}

module.exports.updateOrder = async (req, res) => {
    try {
        const { id, model, price, color, size, code, status } = req.body

        if (!id) {
            return res.status(400).json({ message: 'Order ID is required' })
        }

        const order = await OrderModel.findById(id)
        if (!order) {
            return res.status(404).json({ message: 'Order not found' })
        }

        order.model = model || order.model
        order.color = color || order.color
        order.size = size || order.size
        order.code = code || order.code
        order.price = price || order.price
        order.status = status || order.status

        if (order.status == 'Заказ оплачен') {
            const workerRefs = await WorkerModel.find({
                _id: { $in: order.workers },
            })

            workerRefs.map(async (worker) => {
                const workerHistoryDoc = await WorkerHistory.create({
                    workerName: worker.name,
                    productName: order.productName,
                    summa: worker.price,
                    productId: order._id,
                    workerId: worker._id,
                })

                await WorkerModel.updateOne(
                    { _id: worker._id },
                    { $push: { history: workerHistoryDoc._id } }
                )

                return workerHistoryDoc
            })

            res.status(200).json({ message: 'Success' })
            return
        }

        await order.save()

        res.status(200).json({ message: 'Order updated successfully', order })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server error' })
    }
}

module.exports.deleteOrder = async (req, res) => {
    try {
        const { id } = req.body
        await getById(id)

        await OrderModel.deleteOne({ _id: id })
        res.status(200).json({ message: 'Success' })
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
