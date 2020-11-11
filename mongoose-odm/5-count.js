require('./0-connection')

const Dog = require('./models/Dog.model')

Dog
    .countDocuments({ name: 'Popino' })
    .then(number => console.log("Hay", number))
    .catch(err => console.log('Hubo un error', err))