var express = require('express');
var app = express();

// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// reply to request with "Hello World!"
app.get('/charlie', function (req, res) {
  res.send('He is a special child. 👺');
});

// reply to request with "Hello World!"
app.get('/luca', function (req, res) {
  res.send('Is better than Charlie 👍');
});

// reply to request with "Hello World!"
app.get('/chuckles234', function (req, res) {
  res.send('According to Brock the Rob Johnson, my name is anothy.');
});

// reply to request with "Hello World!"
app.get('/patrick', function (req, res) {
  res.send('I am not a special human being');
});

// reply to request with "Hello World!"
app.get('/Mattjarowicz124', function (req, res) {
  res.send('<img src="https://1.cdn.edl.io/PFEZa720lyk061N3jV0Aoxi3Riwnf1xDQb2gitXOXMO7n9n8.jpg"/>');
});

// reply to request with "Hello World!"
app.get('/Jaden', function (req, res) {
  res.send('IF you get a bigger bed you have bed room but less bedroom');
});

// reply to request with "Hello World!"
app.get('/Kevin', function (req, res) {
  res.send('<img src="https://1.cdn.edl.io/NxweujMTQoV6du3OYqMzyyGjXLNY7QDOogCXDxRqmpjamqwk.jpg"> </i>');
});

//start a server on port 80 and log its start to our console
var server = app.listen(80, function () {

  var port = server.address().port;
  console.log('Example app listening on port ', port);

});
