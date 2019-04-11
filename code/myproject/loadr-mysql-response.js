var express = require('express');
var app = express();
var mysql = require('mysql');

app.get('/', function (req, res) {
   
   var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '1234',
	  database : 'bookshop'
	});
	 
	connection.connect();
	
	connection.query('select * from book', function (error, results, fields) {
		if (error) console.log(error)
			
		//fields
		for(let i = 0; i < fields.length; i++){
			console.log( fields[i].name );
		}	
		
		//send records as a response
		res.send(results);
		
	});

	connection.end();
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});