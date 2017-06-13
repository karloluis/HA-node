var express = require('express');
var router = express.Router();

/* GET about listing. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.render('about', { title: 'Express TEST' });
});

router.get('/test2', function(req, res, next) {
  res.render('about', { title: 'Express TEST2' });
});

module.exports = router;
