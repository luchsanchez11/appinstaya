'use strict'

const express = require('express')
const OrderController = require('../controllers/order')

// Llamamos al router de express
const api = express.Router()


// Creamos las rutas para los metodos de OrderController
api.post('/save', OrderController.saveOrder)
api.get('/orders', OrderController.getOrders)
api.delete('/delete/:id', OrderController.deleteOrder)

module.exports = api;