require('./0-connection')
const Dog = require('./models/dog.model')


// // argumento: objeto a crear en la BBDD
// // retorno: objeto creado en BBDD
// Dog
//     .create({ name: 'Popino', age: 12, color: 'Caramelito' })
//     .then(theNewDog => console.log('El nuevo perro es:', theNewDog))        // <== retorno
//     .catch(err => console.log('Error creando el registro:', err))





// argumento: array de objetos a crear en la BBDD
// retorno: array de objetos creado en BBDD
Dog
    .create([
        { name: 'Popino', color: 'Caramelito' },
        { name: 'Salchichonio', age: 11, color: 'Gris' },
        { name: 'Pistacho', age: 13, color: 'Blanco' },
        { name: 'Bosco', age: 9, color: 'Plata' }
    ])
    .then(theNewDogs => console.log('Los nuevos perros son:', theNewDogs))        // <== retorno
    .catch(err => console.log('Error creando el registro:', err))