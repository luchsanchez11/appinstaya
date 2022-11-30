'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express()
const port = 3900

const url = 'mongodb+srv://admin:jMmbyZHBMlUXEULP@cluster5.usshbxi.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise = global.Promise

const order_routes = require('./routes/order')


//Cargamos Body Parser, es un middleware que nos permite convertir los datos que nos llegan por POST a JSON
app.use(bodyParser.urlencoded({ extended: false }))
//Cualquier petición que llegue por POST la convertimos a JSON
app.use(bodyParser.json())

//Activamos el CORS para permitir peticiones AJAX y HTTP desde el Frontend
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})


app.use('/api', order_routes)


mongoose.connect(url, { useNewUrlParser: true}).then(() => {
  console.log('La conexión a la base de datos se ha realizado correctamente')
  app.listen(port, () => {
    console.log('El servidor está corriendo en http://localhost:' + port)
  })
})
.catch(err => console.log(err))