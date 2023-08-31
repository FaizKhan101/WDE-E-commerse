const express = require("express")

const ordersController = require("../controllers/orders.controller")

const router = express.Router()

router.post('/', ordersController.addOrder);  //orders/

router.get('/', ordersController.getOrders)

router.get('/success', ordersController.getSucess) 

router.get('/failure', ordersController.getFailure)

module.exports = router;