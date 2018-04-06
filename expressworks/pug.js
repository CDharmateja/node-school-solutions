const express = require('express');
const pug = require('pug');
const path = require('path');

const port = process.argv[2];
const file = process.argv[3];

app = express();
app.set('view engine', 'pug');
app.set('views', file);

app.get('/home', (req, res) => {
  res.render('index', {date: new Date().toDateString()});
});

app.listen(port);
