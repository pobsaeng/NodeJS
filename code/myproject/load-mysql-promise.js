var q = require('q');
module.exports.getRows = function getRowsWithPromise(){
	var deferred = q.defer();
	var conn = require('mysql').createConnection({ 
		host : 'localhost', 
		user : 'root', 
		password : '1234', 
		database : 'bookshop' 
	});
	conn.connect();
	var query = conn.query('SELECT * FROM book', function (err, rows, fields) {
		if (err) { deferred.reject(err); } else { deferred.resolve(rows); }
	});
	//console.log( deferred.resolve.rows );
	conn.end();
	return deferred.promise;
}