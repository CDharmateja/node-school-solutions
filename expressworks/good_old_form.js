const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', (req, res) => {
  let rev = req.body.str.split('').reverse().join('');
  res.send(200, rev);
});

app.listen(process.argv[2]);
