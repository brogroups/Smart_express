const InvalidModel = require('../models/invalid.model')
const WorkerModel = require('../models/worker.model')

module.exports.createInvalid = async (req, res) => {
    try {
        const { clientName, productName, price, comment, workers } = req.body

        if (!clientName || !productName || !price || !comment) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        if (workers && workers.length > 0) {
            const workersFound = await WorkerModel.find({
                _id: { $in: workers },
            })
            if (workersFound.length !== workers.length) {
                return res
                    .status(400)
                    .json({ message: 'One or more workers not found' })
            }
        }

        // do workers logic
        const newInvalid = new InvalidModel({
            clientName,
            productName,
            price,
            comment,
            workers,
        })

        await newInvalid.save()
        res.status(201).json({ newInvalid })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.listInvalids = async (req, res) => {
    try {
        const invalids = await InvalidModel.find().populate('workers')
        res.status(200).json({ invalids })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.updateInvalid = async (req, res) => {
    try {
        const { id, clientName, productName, price, comment, workers } =
            req.body

        const invalid = await InvalidModel.findById(id)
        if (!invalid) {
            return res.status(404).json({ message: 'Invalid entry not found' })
        }

        invalid.clientName = clientName || invalid.clientName
        invalid.productName = productName || invalid.productName
        invalid.price = price || invalid.price
        invalid.comment = comment || invalid.comment
        invalid.workers = workers || invalid.workers

        await invalid.save()
        res.status(200).json({ message: 'Invalid entry updated', invalid })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.deleteInvalid = async (req, res) => {
    try {
        const { id } = req.body
        const invalid = await InvalidModel.findById(id)
        if (!invalid) {
            return res.status(404).json({ message: 'Invalid entry not found' })
        }

        await InvalidModel.deleteOne({ _id: id })
        res.status(200).json({ message: 'Invalid entry deleted successfully' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}
