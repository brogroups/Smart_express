const mongoose = require('mongoose')

const Order = new mongoose.Schema({
    clientName: { type: String, required: true },
    price: { type: Number, default: 0 },
    color: { type: Array, default: [] },
    size: { type: Number, default: 0 },
    code: { type: String, required: true, unique: true },
})

const OrderModel = mongoose.model('Order', Order)
module.exports = OrderModel