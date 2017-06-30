var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  context = {
    title: 'Hack Adventure',
    projects: [
      {
        image: '',
        text: ''
      },
    ],
  }
  res.render('index', context);
});


module.exports = router;
