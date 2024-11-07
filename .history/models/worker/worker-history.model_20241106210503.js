const mongoose = require('mongoose')

const workerHistory = new mongoose.Schema({
    workerName: {},
    productName: {},
    summa: {},
    workerId: {},
    productId: {},
})

const workerHistoryModel = mongoose.model('workerHistory', workerHistory)
module.exports = workerHistoryModel
