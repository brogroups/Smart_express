const mongoose = require('mongoose')

const Firma = new mongoose.Schema({
    firma: { type: String, required: true },
    price: { type: Number, default: 0 },
    color: { type: Array, default: [] },
    size: { type: Number, default: 0 },
    code: { type: String, required: true, unique: true },
})

const FirmaModel = mongoose.model('Firma', Firma)
module.exports = FirmaModel
