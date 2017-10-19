const express = require('express'),
  request = require('request'),
  router = express.Router();

const WeatherBaseUrl = 'http://api.openweathermap.org/data/2.5/';
const API_KEY = '602d10eaa16056b9fe71e9d6693e44db';

module.exports = function (app) {
  app.use('/weather', router);
};

router.get('/', function (req, res, next) {

});