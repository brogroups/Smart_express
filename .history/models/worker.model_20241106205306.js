const mongoose = require('mongoose')

const Worker = new mongoose.Schema({
    name: { type: String, required: true },
    summaType: { type: String, unique: true },
    email: { type: String, unique: true },
    address: { type: String, required: true },
    comment: { type: String, required: true },
})

const WorkerModel = mongoose.model('Worker', Worker)
module.exports = WorkerModel
