const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const databaseConnection = async() => {
    await mongoose.connect(process.env.URL)
}