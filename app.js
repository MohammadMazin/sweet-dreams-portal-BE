require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())

//import routes
const ordersRoute = require('./routes/orderRoute')

//Routes
app.use('/orders', ordersRoute)

//Connect to DB
console.log(process.env.DB_CONNECTION)
mongoose.connect(
    process.env.DB_CONNECTION, () => {
        console.log('Connected to Database')
    }
)

//Setting DB Port
// app.listen(5000)
app.listen(`0.0.0.0:$PORT`)