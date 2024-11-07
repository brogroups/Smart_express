const mongoose = require('mongoose')

const History = new mongoose.Schema({
    debts: { type: Number, required: true },
    date: { type: Date, default: Date.now() },
})

const HistoryModel = mongoose.model('History', History)
module.exports = HistoryModel
