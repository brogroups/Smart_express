const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    model: { type: String, required: true },
    price: { type: Number, default: 0 },
    color: { type: Array, default: [] },
})
