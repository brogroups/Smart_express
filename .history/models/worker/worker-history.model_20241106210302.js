const mongoose = require('mongoose')

const workerHistory = new mongoose.Schema({
    workerId: {},
    productId: {},
})

const workerHistoryModel = mongoose.model('workerHistory', workerHistory)
module.exports = workerHistoryModel
