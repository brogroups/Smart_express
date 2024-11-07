const mongoose = require('mongoose')

const workerHistory = new mongoose.Schema({})

const WorkerModel = mongoose.model('workerHistory', workerHistory)
module.exports = WorkerModel
