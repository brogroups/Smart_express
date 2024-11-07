const mongoose = require('mongoose')

const salesProduct = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    totalPrice: { type: Number, default: 0 },
    firmaName: { type: String, required: true },
    firmaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Firma' },
})

const salesProductModel = mongoose.model('Product', Product)
module.exports = salesProductModel