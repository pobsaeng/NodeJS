var express = require('express');
var http = require('http');
var fs = require('fs');
var mysql = require('mysql');
var dbutil = require('./dbutil/query');
var app = express();

var conn = require('mysql').createConnection(dbutil.connect);

app.get('/', function(req, res, param){
	let file = process.cwd() + '/views/home.html';                                                   
    res.writeHead(200, {"Content-Type": "text/html"});                                                 
    fs.createReadStream(file).pipe(res);
});

app.get('/getcustomers', function (req, res) {	 
	conn.connect();
	conn.query( dbutil.q_all_book , function (error, results, fields) {
		if (error) console.log(error)
			
        res.header('Content-type','application/text');
		res.header('Charset','utf8');
        res.send( {data:results} );

	});
	conn.end();
});
app.set('port', process.env.PORT || 4300);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Listening on port ' + app.get('port'));
});
