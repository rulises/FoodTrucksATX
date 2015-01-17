var express = require('express');
var router = express.Router();
var places = require('./places.js')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/places', places.findAllPlaces);


/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about');
});

module.exports = router;
