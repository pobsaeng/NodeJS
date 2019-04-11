
var conn = require('mysql').createConnection({ 
	host : 'localhost', 
	user : 'root', 
	password : '1234', 
	database : 'bookshop' 
});

function getData(callback) {
	conn.connect();
	conn.query('SELECT * FROM book', function(err, res, fields) {
		callback(err, res, fields);
	});
	conn.end();
}

module.exports = { getData: getData }
