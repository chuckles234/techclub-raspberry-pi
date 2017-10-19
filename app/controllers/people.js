var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/charlie', function (req, res) {
  res.send('He is a special child. 👺');
});

router.get('/luca', function (req, res) {
  res.send('The stupidest person in the world with no friends or family. Seriosly, its so bad that its become sad. Pretty funny though.');
});

router.get('/chuckles234', function (req, res) {
  res.send('According to Brock the Rob Johnson, my name is anothy.');
});

router.get('/patrick', function (req, res) {
  res.send('I am not a special human being');
});

router.get('/Mattjarowicz124', function (req, res) {
  res.send('<img src="https://1.cdn.edl.io/PFEZa720lyk061N3jV0Aoxi3Riwnf1xDQb2gitXOXMO7n9n8.jpg"/>');
});

router.get('/Jaden', function (req, res) {
  res.send('IF you get a bigger bed you have bed room but less bedroom');
});

router.get('/Kevin', function (req, res) {
  res.send('<img src="https://1.cdn.edl.io/NxweujMTQoV6du3OYqMzyyGjXLNY7QDOogCXDxRqmpjamqwk.jpg"> </i>');
});

router.get('/dan', function (req, res) {
  res.send('<span style="font-size: 24pt; color: pink;">lit</span>');
});