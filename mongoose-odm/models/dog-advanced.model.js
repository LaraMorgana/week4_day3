const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'Desconocido',
        trim: true,
        set: text => text.charAt(0).toUpperCase() + text.substring(1) + ' (adopted!)'
    },
    age: {
        type: Number,
        min: 2,
        max: 10
    },
    color: {
        type: String,
        enum: ['brown', 'black', 'white', 'mixed'],
        lowercase: true
    },
    attitude: {
        type: [String]          // Array de strings
    },
    chip: {
        type: String,
        match: /[A-Z]{2}\d{4}/
    },
    email: {
        type: String,
        validate: {
            validator: text => text.endsWith('@losperrinos.com'),
            message: "Sólo emails de Los Perrinos! :3"
        }
    }
}, {
    timestamps: true
})

const Dog = mongoose.model('Dog', dogSchema)        // ===> collection 'dogs'

module.exports = Dog