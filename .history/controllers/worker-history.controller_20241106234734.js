const workerHistoryModel = require('../models/worker/worker-history.model')
const WorkerModel = require('../models/worker.model')
const ProductModel = require('../models/product.model')

module.exports.createWorkerHistory = async (req, res) => {
    try {
        const { workerName, productName, summa, workerId, productId } = req.body

        if (!workerName || !productName || !summa || !workerId || !productId) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        const worker = await WorkerModel.findById(workerId)
        const product = await ProductModel.findById(productId)

        if (!worker || !product) {
            return res
                .status(404)
                .json({ message: 'Worker or Product not found' })
        }

        const newWorkerHistory = new workerHistoryModel({
            workerName,
            productName,
            summa,
            workerId,
            productId,
        })

        await newWorkerHistory.save()
        res.status(201).json({ newWorkerHistory })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.getWorkerHistoryByWorker = async (req, res) => {
    try {
        const { id } = req.body
        const workerHistory = await workerHistoryModel
            .find({ workerId: id })
            .populate('productId')

        if (!workerHistory.length) {
            return res
                .status(404)
                .json({ message: 'No history found for this worker' })
        }

        res.status(200).json({ workerHistory })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.updateWorkerHistory = async (req, res) => {
    try {
        const { id, workerName, productName, summa, workerId, productId } =
            req.body

        const workerHistory = await workerHistoryModel.findById(id)

        if (!workerHistory) {
            return res.status(404).json({ message: 'Worker History not found' })
        }

        workerHistory.workerName = workerName || workerHistory.workerName
        workerHistory.productName = productName || workerHistory.productName
        workerHistory.summa = summa || workerHistory.summa
        workerHistory.workerId = workerId || workerHistory.workerId
        workerHistory.productId = productId || workerHistory.productId

        await workerHistory.save()
        res.status(200).json({
            message: 'Worker History updated successfully',
            workerHistory,
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.deleteWorkerHistory = async (req, res) => {
    try {
        const { id } = req.body
        const workerHistory = await workerHistoryModel.findById(id)

        if (!workerHistory) {
            return res.status(404).json({ message: 'Worker History not found' })
        }

        await workerHistoryModel.deleteOne({ _id: id })
        res.status(200).json({ message: 'Worker History deleted successfully' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

const getById = async (id) => {}
