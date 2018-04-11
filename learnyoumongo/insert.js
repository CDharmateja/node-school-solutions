const mongo = require('mongodb').MongoClient

let url = 'mongodb://localhost:27017'

mongo.connect(url, (err, client) => {
	if (err) return console.error(err)
	let db = client.db('learnyoumongo')
	doc = { firstName: process.argv[2], lastName: process.argv[3]}
	db.collection('docs').insert(doc, (err, data) => {
			if (err) return console.error(err)
			console.log(JSON.stringify(data.ops[0]))
			client.close()
		}
	)
})
