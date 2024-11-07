const mongoose = require('mongoose')

const Invalid = new mongoose.Schema({
    clientName: { type: String, required: true },
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    comment: { type: String, required: true },
    date: { type: String, required: true },
})

const InvalidModel = mongoose.model('Invalid', Invalid)
module.exports = InvalidModel
