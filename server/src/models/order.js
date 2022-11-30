'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = Schema({
    // Pick up details
    sender: String,
    idPickUp: String,
    address: String,
    city: String,
    date: { type: Date, default: Date.now },

    // Package details
    length: Number,
    width: Number,
    weight: Number,
    height: Number,
    delicate: Boolean,
    
    //Recipients details
    name: String,
    idRecipient: String,
    address: String,
    city: String,
})

module.exports = mongoose.model('Order', OrderSchema)