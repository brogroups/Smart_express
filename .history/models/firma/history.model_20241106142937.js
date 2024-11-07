const mongoose = require('mongoose')

const History = new mongoose.Schema({
    model: { type: String, required: true },
    price: { type: Number, default: 0 },
})

const HistoryModel = mongoose.model('History', History)
module.exports = HistoryModel
