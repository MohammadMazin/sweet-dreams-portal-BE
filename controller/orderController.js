const Order = require('../models/orderModel')

exports.getAllOrders = async(req, res, next) => {
    try {
        console.log('first')
        const q = await Order.find({ data: -1 })
        res.json({
            success: true,
            data: q
        })

    } catch (err) {
        console.log(err.message)
        res.json({
            error: true,
            message: err
        })
    }
}

exports.addOrder = async(req, res, next) => {
    try {
        const { name, location, quantity, paid, amount, phoneNumber, order } = req.body
        const newOrder = await Order.create({ name, location, quantity, paid, amount, phoneNumber, order })
        if (!newOrder)
            throw new Error('Failed to add Order')
        res.json({
            success: true,

        })
    } catch (error) {
        console.log(error.message)
        res.json({
            error: true,
            message: error
        })
    }
}

exports.editBoard = async(req, res) => {
    try {
        // const { _id, name,  } = req.body
        // const data = await Board.updateOne({ _id }, { $set: { name: name, location: location } })

        res.json({
            success: true,
        })

    } catch (error) {
        res.json({
            error: true,
            message: error.message
        })
    }
}

exports.setOrderAsPaid = async(req, res) => {
    try {
        const { _id, paid } = req.body
        const data = await Order.updateOne({ _id }, { $set: { paid: paid } })
        res.json({
            success: true,
        })
    } catch (error) {
        res.json({
            error: true,
            message: error.message
        })
    }
}

exports.deleteOrder = async(req, res, next) => {
    try {
        const { _id } = req.body
        const deleteOrder = await Order.deleteOne({ _id })
        if (!deleteOrder)
            throw new Error('Failed to delete order')

        res.json({
            success: true
        })

    } catch (error) {
        res.json({
            error: true,
            message: error.message
        })
    }
}