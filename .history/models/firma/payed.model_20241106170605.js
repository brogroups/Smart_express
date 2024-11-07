const mongoose = require('mongoose')

const Payed = new mongoose.Schema({
    debts: { type: Number, required: true },
    moneyType: { type: String, required: true },
})

const PayedModel = mongoose.model('Payed', Payed)
module.exports = PayedModel
