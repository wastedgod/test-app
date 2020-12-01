module.exports.config = {
    uri: process.env.DB_URI == null ? 
		'mongodb+srv://admin:anime@cluster0-e7lsm.mongodb.net/test?retryWrites=true' :
		process.env.DB_URI,
    options: {
        dbName: process.env.DB_NAME == null ? 
			'reddit-app' : 
			process.env.DB_NAME,
        useNewUrlParser: true
    },
}