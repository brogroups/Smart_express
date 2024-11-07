const mongoose = require('mongoose')

const Worker = new mongoose.Schema({
    name: { type: String, required: true },
    summaType: { type: String, required: true },
    price: { type: Number, required: true },
    address: { type: String, required: true },
    comment: { type: String, required: true },
})

const WorkerModel = mongoose.model('Worker', Worker)
module.exports = WorkerModel
