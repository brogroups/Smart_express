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
    moneyType: {
        type: String,
        enum: Object.values(Type),
        default: Type.uzs,
    },
    color: { type: Array, default: [] },
    size: { type: Number, default: 0 },
    code: { type: String, required: true, unique: true },
})

const FirmaModel = mongoose.model('Firma', Firma)
module.exports = FirmaModel
