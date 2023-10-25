const router = require('express').Router()

router.get('/', (req, res) => {
    //res.send('GET /places')
    res.render('places/index')
})

module.exports = router
