const express = require('express')
const app = express()
const path = require('path')
const public = process.argv[3];

app.get('/', (req, res) => {
	res.sendFile(path.join(public))
})

app.use('/', express.static(public || path.join(__dirname, 'public')))
app.listen(process.argv[2])
