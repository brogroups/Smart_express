const mongoose = require('mongoose')

const salesProduct = new mongoose.Schema({
    model: { type: String, required: true },
    price: { type: Number, default: 0 },
    color: { type: Array, default: [] },
    size: { type: Number, default: 0 },
    code: { type: String, required: true, unique: true },
})

const salesProductModel = mongoose.model('Product', Product)
module.exports = salesProductModel
