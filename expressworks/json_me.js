const express = require('express')
const fs = require('fs')

let app = express()

file = process.argv[3]

app.get('/books', (req, res) => {
	fs.readFile(file, { encoding: 'utf-8' }, (error, data) => {
		if (error) console.error(error)
		let string = ''
		for (const chunk of data) {
			string += chunk
		}
		let object = JSON.parse(string)
		res.json(object)
	})
})

app.listen(process.argv[2])
