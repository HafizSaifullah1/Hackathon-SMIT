const express = require('express')
const productController = require('../Controller/productController')
const Route = express.Router()

Route.get('/',productController.getProducts)
Route.post('/',productController.addProduct)
Route.put('/:id',productController.updateProduct)
Route.get('/:id',productController.getProductById)
Route.delete('/:id',productController.deleteProduct)


module.exports =Route;