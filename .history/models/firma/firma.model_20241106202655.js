const mongoose = require('mongoose')

const Type = {
    usd: 'usd',
    uzs: 'uzs',
}

const Firma = new mongoose.Schema({
    firma: { type: String, required: true },
    manager: { type: String, required: true },
    phone: { type: String, unique: true },
    email: { type: String, unique: true },
    paymentMethod: {
        type: String,
        // enum: Object.values(Type),
        // default: Type.uzs,
        required: true,
    },
    address: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    active: { type: Boolean, default: true },
    debts: { type: Number, default: 0 },
    saleProducts: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'salesProduct' },
    ],
    payments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Payed' }],
})

const FirmaModel = mongoose.model('Firma', Firma)
module.exports = FirmaModel
