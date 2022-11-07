const { Schema, model } = require('mongoose')

const OrderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    order: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paid: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }

})
const orderModel = model('order', OrderSchema)
module.exports = orderModel