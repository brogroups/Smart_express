const mongoose = require('mongoose')

const workerHistory = new mongoose.Schema({
    workerName: { type: String, required: true },
    productName: { type: String, required: true },
    summa: { type: Number, required: true },
    workerId: {},
    productId: {},
})

const workerHistoryModel = mongoose.model('workerHistory', workerHistory)
module.exports = workerHistoryModel
