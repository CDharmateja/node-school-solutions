const mongo = require('mongodb').MongoClient

let url = 'mongodb://localhost:27017'

mongo.connect(url, (err, client) => {
	if (err) return console.error(err)
	let db = client.db('learnyoumongo')
	let find = db.collection('parrots').find({
		age:{ $gt: parseInt(process.argv[2]) }
	})
	find.project({_id: 0}).toArray((err, callback) => {
		if (err) return console.error(err)
		console.log(callback)
		client.close()
	})
})
