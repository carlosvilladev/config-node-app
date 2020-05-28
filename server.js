var express = require('express');
var app = express();
const dotenv = require('dotenv');
dotenv.config();
const config = require('config');

const PORT = config.get('defaultPort');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});