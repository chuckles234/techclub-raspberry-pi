var express = require('express');
var app = express();

// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// reply to request with "Hello World!"
app.get('/charlie', function (req, res) {
  res.send('He is a special child. -_-');
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
