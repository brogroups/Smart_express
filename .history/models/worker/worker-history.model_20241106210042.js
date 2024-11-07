const mongoose = require('mongoose')

const Worker = new mongoose.Schema({})

const WorkerModel = mongoose.model('Worker', Worker)
module.exports = WorkerModel
