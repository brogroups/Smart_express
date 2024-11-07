const mongoose = require('mongoose')

const workerHistory = new mongoose.Schema({})

const WorkerModel = mongoose.model('Worker', Worker)
module.exports = WorkerModel
