const mongoose = require('mongoose')

const History = new mongoose.Schema({
    debts: { type: Number, required: true },
    price: { type: Number, default: 0 },
})

const HistoryModel = mongoose.model('History', History)
module.exports = HistoryModel
