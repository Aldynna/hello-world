var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'test' });
});
router.post('/login', function(req, res, next) {
  console.log(reg.body);
  res.send({
    status:"ok"
  })
});

//router.get('/koord', function(req, res, next) {
//  var KK{southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random()};
//  console.log(KK);
//  res.send(KK);

//});
module.exports = router;
