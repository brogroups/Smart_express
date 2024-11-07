const WorkerModel = require('../models/worker.model')
const workerHistoryModel = require('../models/workerHistory.model')

module.exports.createWorker = async (req, res) => {
    try {
        const { name, summaType, price, percent, active, history } = req.body

        if (!name || !summaType) {
            return res
                .status(400)
                .json({ message: 'Name and Summa Type are required' })
        }

        const newWorker = new WorkerModel({
            name,
            summaType,
            price,
            percent,
            active,
            history,
        })

        await newWorker.save()
        res.status(201).json({ newWorker })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.listWorkers = async (req, res) => {
    try {
        const workers = await WorkerModel.find().populate('history')
        res.status(200).json({ workers })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.updateWorker = async (req, res) => {
    try {
        const { id, name, summaType, price, percent, active, history } =
            req.body

        const worker = await WorkerModel.findById(id)
        if (!worker) {
            return res.status(404).json({ message: 'Worker not found' })
        }

        worker.name = name || worker.name
        worker.summaType = summaType || worker.summaType
        worker.price = price || worker.price
        worker.percent = percent || worker.percent
        worker.active = active !== undefined ? active : worker.active
        worker.history = history || worker.history

        await worker.save()
        res.status(200).json({ message: 'Worker updated successfully', worker })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.deleteWorker = async (req, res) => {
    try {
        const { id } = req.body

        const worker = await WorkerModel.findById(id)
        if (!worker) {
            return res.status(404).json({ message: 'Worker not found' })
        }

        await worker.remove()
        res.status(200).json({
            message: 'Worker and related history deleted successfully',
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}
