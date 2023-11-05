// Get the environment variables
require('dotenv').config()

// Require needed node modules
const express = require('express')

// Initialize your application by calling the function returned by the express module
const app = express()

// Modules and Globals
const methodOverride = require('method-override')

//Express settings
app.set('views',__dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//Declare routes
//places index page
app.use('/places', require('./controllers/places'))

//Home page
app.get('/', (req, res) => {
//res.send('Hello world!')
res.render('home')
})

//404 page
app.get('*', (req, res) => {
   // res.status(404).send(`<h1>404 Page</h1>`)
   res.render('error404')
   
})


// Listen to a port number defined by a local environment variable
//app.listen(3000)
app.listen(process.env.PORT)



