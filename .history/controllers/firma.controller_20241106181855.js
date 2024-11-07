const FirmaModel = require('../models/firma/firma.model')

module.exports.createFirma = async (req, res) => {
    try {
        const {
            firma,
            manager,
            phone,
            email,
            moneyType,
            address,
            // date,
            debts,
        } = req.body
        if (
            !firma ||
            !manager ||
            !phone ||
            !email ||
            !moneyType ||
            !address ||
            !debts
        ) {
            res.status(400).json({ message: 'Put all lines' })
        }

        const newFirma = await FirmaModel.create({
            firma,
            phone,
            manager,
            email,
            paymentMethod: moneyType,
            address,
            debts,
        })
        await newFirma.save()

        res.status(201).json({ newFirma })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
        console.log(error)
    }
}

module.exports.listFirma = async (req, res) => {
    try {
        const firms = await FirmaModel.find()
        // .populate('saleProducts')
        res.status(200).json({ firms })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports.updateFirma = async (req, res) => {
    try {
        const { id, firma, manager, phone, email, moneyType, address, debts } =
            req.body

        const isFirma = await getById(id)

        const updatedFirma = await FirmaModel.updateOne({
            _id: id,
            firma: firma || isFirma.firma,
            manager: manager || isFirma.manager,
            phone: phone || isFirma.phone,
            email: email || isFirma.email,
            moneyType: moneyType || isFirma.moneyType,
            address: address || isFirma.address,
            debts: debts || isFirma.debts,
        })

        // await updatedFirma.s()
        res.status(200).json({ message: 'Updated' })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
        console.log(error)
    }
}

module.exports.deleteFirma = async (req, res) => {
    try {
        const { id } = req.body
        await getById(id)

        await FirmaModel.deleteOne({ _id: id })
        res.status(200).json({ message: 'Success' })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

const getById = async (id) => {
    try {
        const firma = await FirmaModel.findById(id)
        if (!firma) {
            res.status(404).json({ message: 'NOt Found firma' })
        }

        return firma
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}
