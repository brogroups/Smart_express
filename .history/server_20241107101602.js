const express = require('express')
const { databaseConnection } = require('./config/database.config')
const { adminCreateConfig } = require('./config/admin.config')
const { userRoutes } = require('./routes/user.routes')
const { loginRoutes } = require('./routes/login.routes')
const { productRouter } = require('./routes/product.routes')
const { firmaRouter } = require('./routes/firma.routes')
const { salesRouter } = require('./routes/sales-product.routes')
const { paymentRouter } = require('./routes/payment.routes')
const { workerRouter } = require('./routes/worker.routes')
const { workerHistoryRouter } = require('./routes/worker-history.routes')
const { invalidRouter } = require('./routes/invalid.routes')
const { leadRouter } = require('./routes/lead.routes')
const dotenv = require('dotenv').config()

const port = process.env.PORT
const app = express()
app.use(express.json())

adminCreateConfig()
databaseConnection()

app.use('/user', userRoutes)
app.use('/login', loginRoutes)

app.use('/firma', firmaRouter)
app.use('/sales-product', salesRouter)
app.use('/payment', paymentRouter)

app.use('/order', productRouter)
app.use('/worker', workerRouter)
app.use('/worker-history', workerHistoryRouter)

app.use('/invalid', invalidRouter)
app.use('/lead', leadRouter)

app.listen(port, () => {
    console.log(`Server run successful on port ${port}`)
})
