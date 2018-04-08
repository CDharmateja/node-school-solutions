const express = require('express')

let app = express()

app.put('/message/:id', (req, res) => {
	let id = req.params.id
	let sha1 = require('crypto').createHash('sha1').update(new Date().toDateString() + id).digest('hex')
	res.status(200).send(sha1)
})

app.listen(process.argv[2])
