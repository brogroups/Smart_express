const mongoose = require('mongoose')

const Order = new mongoose.Schema({
    clientName: { type: String, required: true },
    phone: { type: String, required: true },
    productName: { type: String, required: true },
    price: { type: Number, default: 0 },
    color: { type: Array, default: [] },
    size: { type: Number, default: 0 },
    code: { type: String, required: true, unique: true },
    avans: { type: Number, default: 0 },
    qoldiq: { type: Number, default: 0 },
    address: { type: String, required: true },
    startDate: {},
    endDate()
})

const OrderModel = mongoose.model('Order', Order)
module.exports = OrderModel