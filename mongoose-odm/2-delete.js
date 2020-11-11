require('./0-connection')
const Dog = require('./models/Dog.model')



// // .findByIdAndDelete()
// // Recibe como argumento el ID string
// // Retorna el objeto eliminado

// Dog
//     .findByIdAndDelete('5fabba228d81391b49721e41')
//     .then(info => console.log('La información de la eliminaciónes:', info))
//     .catch(err => console.log('Se produjo un error', err))






// // .deleteMany()
// // Recibe como argumento una query, afecta a cualquier match
// // Retorna los detalles de la operación

// Dog
//     .deleteMany({ age: 11 })
//     .then(info => console.log('Se han eliminado', info.deletedCount, 'perro/s'))
//     .catch(err => console.log('Se produjo un error', err))








// // .deleteOne()
// // Recibe como argumento una query, afecta al primer match
// // Retorna los detalles de la operación 

Dog.deleteOne({ age: { $lte: 10 } })
    .then(info => console.log(info))
    .catch(err => console.log('Se produjo un error', err))