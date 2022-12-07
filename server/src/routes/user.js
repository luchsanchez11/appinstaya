'use strict'

const express = require('express')
const UserController = require('../controllers/user')

// Llamamos al router de express
const api = express.Router()


// Creamos las rutas para los metodos de OrderController
api.post('/save', UserController.saveUser)
//api.get('/orders', UserController.getUser)
//api.delete('/delete/:id', UserController.deleteUser)

module.exports = api;