const mongo = require('mongodb').MongoClient

let url = "mongodb://localhost:27017"

mongo.connect(url, (error, client) => {
	if (error) return console.error(error)
	let db = client.db(process.argv[2])
	let collection = db.collection(process.argv[3])
	collection.remove({
		_id: process.argv[4]
	}, (error, callback) => {
		if (error) return console.error(error)
		client.close()
	})
})
