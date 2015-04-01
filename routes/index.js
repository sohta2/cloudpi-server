'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Home Server', clientkey: process.env.IRKIT_CLIENT_KEY, deviceid: process.env.IRKIT_DEVICE_ID });
});

module.exports = router;
