const express = require('express')
const { databaseConnection } = require('./config/database.config')
const { adminCreateConfig } = require('./config/admin.config')
const dotenv = require('dotenv').config()

const port = process.env.PORT
const app = express()

app.use(express.json())
adminCreateConfig()
databaseConnection()

app.listen(port, () => {
    console.log(`Server run successful on port ${port}`)
})
