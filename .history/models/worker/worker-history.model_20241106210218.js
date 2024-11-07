const mongoose = require('mongoose')

const workerHistory = new mongoose.Schema({})

const workerHistoryModel = mongoose.model('workerHistory', workerHistory)
module.exports = WorkerModel
