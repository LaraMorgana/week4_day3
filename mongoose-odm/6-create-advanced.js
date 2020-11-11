require('./0-connection')

const DogAdvanced = require('./models/Dog-advanced.model')

const dog = {
    age: 6,
    color: 'Black',
    name: 'chulapo',
    chip: 'AB00P0',
    email: 'chulapete@losperrinos.com',
    attitude: ['grumphy', 'playful']
}

DogAdvanced
    .create(dog)
    .then(newDogs => console.log('Los nuevos elementos creados:', newDogs))
    .catch(err => console.log('Hubo un error', err))
