const OrderModel = require('../models/order.model')
const WorkerModel = require('../models/worker/worker.model')
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
