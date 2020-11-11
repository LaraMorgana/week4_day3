require('./0-connection')

const Dog = require('./models/Dog.model')


// // .findByIdAndUpdate()
// // Recibe string con id, y la manipulación
// // Por defecto, retorna el elemento anterior al update
// // Un  tercer argumento opcional {new: true} retorna el objeto ya actualizado
// Dog
//     .findByIdAndUpdate('5fabc14bec59a21c0a8a9c56', { $inc: { age: 1 } }, { new: true })
//     .then(dog => console.log("El perro modificado es:", dog))
//     .catch(err => console.log('Hubo un error', err))




// // Recibe query, actualiza el primer match
// Dog
//     .updateOne({ color: 'Caramelito' }, { color: 'Caramelo' })
//     .then(details => console.log("Los detalles de la modificación son:", details))
//     .catch(err => console.log('Hubo un error', err))





// // Recibe query, actualiza todos los match
Dog
    .updateMany({ name: 'Salchichonio' }, { name: 'Salchichonino Reloaded' })
    .then(details => console.log("Los detalles de la modificación son:", details))
    .catch(err => console.log('Hubo un error', err))