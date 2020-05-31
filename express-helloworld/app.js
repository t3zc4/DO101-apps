var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('This version #1 of app-update lab\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello mars second function\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

