const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String
}, {
    timestamps: true
})

const Dog = mongoose.model('Dog', dogSchema)        // ===> collection 'dogs'

module.exports = Dog