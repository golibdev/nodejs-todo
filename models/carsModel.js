const { Schema, model } = require('mongoose')

const carModel = new Schema({
    carName: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    }
})

module.exports = model('Car', carModel)