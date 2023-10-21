require('dotenv').config()
const express = require('express')
const app = express()

//places index page
app.use('/places', require('./controllers/places'))

//Home page
app.get('/', (req, res) => {
res.send('Hello world!')
})

//404 page
app.get('*', (req, res) => {
    res.status(404).send(`<h1>404 Page</h1>`)
})


// Listen to a port number defined by a local environment variable
//app.listen(3000)
app.listen(process.env.PORT)




