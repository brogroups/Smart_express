const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

export const databaseConnection = async() => {
    await mongoose.connect(process.env.URL)
    .then(() => {console.log('DATABASE_CONNECTED_SUCCESSFUL')})
    .catch(() => {
        console.log('ERROR IN CONNECTION DATABASE')
    })
}