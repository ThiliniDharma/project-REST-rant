const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/resturant4.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cat_latte.jpg'
      }]
      
    //res.send('GET /places')
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = '/images/cat.jpg'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    //res.send('POST /places')
    res.redirect('/places')
  })
  
  router.get('/:id', (req, res) => {
    res.render('places/show')
  })
  
  router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      //res.render('places/show')
      res.render('places/show', { place: places[id] })

    }
  })
  

module.exports = router
