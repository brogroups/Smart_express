const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    model: { type: String, required: true },
})
