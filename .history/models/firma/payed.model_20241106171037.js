const mongoose = require('mongoose')

const Payed = new mongoose.Schema({
    amount: { type: Number, required: true, default: true },
    moneyType: { type: String, required: true },
    paymentData: { type: Date, required: true },
    firmaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Firma',
        required: true,
    },
})

const PayedModel = mongoose.model('Payed', Payed)
module.exports = PayedModel
