const mongoose = require('mongoose')

const Worker = new mongoose.Schema({
    name: { type: String, required: true },
    summaType: { type: String, required: true },
    price: { type: Number, default: 0 },
    percent: { type: Number, required: true },
    active: { type: Boolean, default: true },
})

const WorkerModel = mongoose.model('Worker', Worker)
module.exports = WorkerModel
