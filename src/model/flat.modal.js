const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FlatSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    room: {
        type: Number,
        required: true
    },
    floor: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    sellerName: {
        type: String,
        required: true
    },
    link: {
        type: String,
    }
})

mongoose.model('flat', FlatSchema)