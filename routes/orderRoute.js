const express = require('express')
const { getAllOrders, addOrder, deleteOrder, setOrderAsPaid } = require('../controller/orderController')
const router = express.Router()

router.get('/', getAllOrders)
router.post('/add', addOrder)
router.post('/paid', setOrderAsPaid)
router.post('/delete', deleteOrder)

module.exports = router