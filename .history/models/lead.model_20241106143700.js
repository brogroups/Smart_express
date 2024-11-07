const mongoose = require('mongoose')

const Lead = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, default: 0 },
    color: { type: Array, default: [] },
    size: { type: Number, default: 0 },
    code: { type: String, required: true, unique: true },
})

const LeadModel = mongoose.model('Lead', Lead)
module.exports = LeadModel
