const mongoose = require('mongoose')

const salesProduct = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    totalPrice: { type: Number, default: 0 },
    firmaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Firma',
        required: true,
    },
    status: { type: String, required: true },
})

const salesProductModel = mongoose.model('salesProduct', salesProduct)
module.exports = salesProductModel
