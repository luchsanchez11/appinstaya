'use strict'

const Order = require('../models/order')

// Se crea un objeto para disponer de todos los metodos de ruta que vamos a definir

const controller = {
    // Metodo para guardar un pedido
    saveOrder: (req, res) => {
        // Recogemos los datos que nos llegan por POST
        const params = req.body
        // Creamos una nueva instancia del modelo Order
        const order = new Order()
        // Asignamos los datos que nos llegan por POST a la instancia del modelo Order
        order.sender = params.sender
        order.idPickUp = params.idPickUp
        order.address = params.address
        order.city = params.city
        order.date = params.date
        order.length = params.length
        order.width = params.width
        order.weight = params.weight
        order.height = params.height
        order.delicate = params.delicate
        order.name = params.name
        order.idRecipient = params.idRecipient
        order.address = params.address
        order.city = params.city
        // Guardamos el pedido en la base de datos
        order.save((err, orderStored) => {
            // Si se produce un error en el guardado
            if (err) return res.status(500).send({ message: 'Error al guardar el pedido' })
            // Si no se produce ningún error
            if (!orderStored) return res.status(404).send({ message: 'No se ha podido guardar el pedido' })
            // Si se guarda correctamente
            return res.status(200).send({ order: orderStored })
        })
    },

    //Metodo para listar todos los pedidos

    getOrders: (req, res) => {
        // Buscamos todos los pedidos en la base de datos
        Order.find({}).exec((err, orders) => {
            // Si se produce un error en la búsqueda
            if (err) return res.status(500).send({ message: 'Error al devolver los datos' })
            // Si no se produce ningún error
            if (!orders) return res.status(404).send({ message: 'No hay pedidos para mostrar' })
            // Si se encuentra algún pedido
            return res.status(200).send({ orders })
        })
    },

    //Metodo para eliminar un pedido

    deleteOrder: (req, res) => {
        // Recogemos el id del pedido que queremos eliminar
        const orderId = req.params.id
        // Buscamos el pedido en la base de datos y lo eliminamos
        Order.findOneAndDelete({_id: orderId}, (err, orderRemoved) => {
            // Si se produce un error en la búsqueda
            if (err) return res.status(500).send({ message: 'No se ha podido borrar el pedido' })
            // Si no se produce ningún error
            if (!orderRemoved) return res.status(404).send({ message: 'No se puede eliminar ese pedido' })
            // Si se elimina correctamente
            return res.status(200).send({ order: orderRemoved })
        })
    },
}

module.exports = controller