const mongo = require('mongodb').MongoClient

let url = 'mongodb://localhost:27017'

mongo.connect(url, (error, client) => {
	if(error) return console.error(error)
	let db = client.db('learnyoumongo')
	let collection = db.collection('parrots')
	collection.count({
		age: {$gt: parseInt(process.argv[2])}
	}, (error, count) => {
		if (error) return console.error(error)
		console.log(count)
		client.close()
	})
})
