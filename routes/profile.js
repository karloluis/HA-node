var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const context = {
    title: 'Profile',
    name: 'Karlo',
    age: 26,
    position: 'Instructor',
    hobbies: ['waterpolo', 'cycling', 'pool', 'dominoes'],
  }
  res.render('profile', context);
});

module.exports = router;
