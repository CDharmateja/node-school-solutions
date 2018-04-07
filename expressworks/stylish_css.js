const express = require('express');

const port = process.argv[2];
const folder = process.argv[3];

let app = express();

app.use(require('stylus').middleware(folder));
app.use(express.static(folder));

app.listen(port);
