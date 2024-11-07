const mongoose = require('mongoose')

const Invalid = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, unique: true },
    email: { type: String, unique: true },
    address: { type: String, required: true },
    comment: { type: String, required: true },
})

const InvalidModel = mongoose.model('Invalid', Invalid)
module.exports = InvalidModel
