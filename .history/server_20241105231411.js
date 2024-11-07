const express = require("express")
const dotenv = require("dotenv").config()


const port = process.env.PORT
const app = express()

app.use(express.json())

app.listen(port, () => {
    console.log(`Server run successfull on port ${port}`)
})