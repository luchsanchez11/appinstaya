'use strict'


const User = require('../models/user')

// Se crea un objeto para disponer de todos los metodos de ruta que vamos a definir

const controller = {
    // Metodo para guardar un pedido
    saveUser: (req, res) => {
        // Recogemos los datos que nos llegan por POST
        const params = req.body
        // Creamos una nueva instancia del modelo User
        const User = new User()
        // Asignamos los datos que nos llegan por POST a la instancia del modelo Order
        User.nameUser = params.nameUser
        User.email = params.email
        User.password = params.password
        
        // Guardamos el pedido en la base de datos
        User.save((err, userStored) => {
            // Si se produce un error en el guardado
            if (err) return res.status(500).send({ message: 'Error al crear el usuario.' })
            // Si no se produce ningún error
            if (!userStored) return res.status(404).send({ message: 'No se ha podido guardar el usuario' })
            // Si se guarda correctamente
            return res.status(200).send({ User: userStored })
        })
    },

    //Metodo para listar todos los pedidos
/*
    getOrders: (req, res) => {
        // Buscamos todos los pedidos en la base de datos
        Order.find({}).exec((err, orders) => {
            // Si se produce un error en la búsqueda
            if (err) return res.status(500).send({ message: 'Error al devolver los datos' })
            // Si no se produce ningún error
            if (!orders) return res.status(404).send({ message: 'No hay pedidos para mostrar' })
            // Si se encuentra algún pedido
            return res.status(200).send({ orders: orders})
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

*/
}

module.exports = controller