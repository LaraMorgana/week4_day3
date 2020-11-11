const express = require('express')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

require('./configs/connection')                 // new!
const Dog = require('./models/dog.model')       // new!


app.get('/', (req, res) => res.render('index'))

app.get('/perrinos', (req, res) => {

    Dog.find()
        .then(allTheDogsFromDB => {
            console.log('Han llegado los perros:', allTheDogsFromDB)
            res.render('dogs-list', { allDogs: allTheDogsFromDB })
        })
        .catch(err => console.log('ERROR:', err))
})

app.listen(3000, () => console.log(`Servidor levantado en el puerto 3000`))