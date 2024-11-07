const mongoose = require('mongoose')

const Payed = new mongoose.Schema({
    debts: { type: Number, required: true },
    paymentType: { type: Date, default: Date.now() },
})

const PayedModel = mongoose.model('Payed', Payed)
module.exports = PayedModel
