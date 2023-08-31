const express = require("express")

const productsController = require('../controllers/product.controller')

const router = express.Router()

router.get('/products', productsController.getAllProducts)

router.get('/products/:id', productsController.getProductDetails)

module.exports = router