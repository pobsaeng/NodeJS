var app = require("express")();
var mysql = require("mysql");
var http = require('http').Server(app);
var io = require("socket.io")(http);
var path = require('path');

var pool = mysql.createConnection({
host     : '127.0.0.1',
user     : 'root',
password : '1234',
database : 'bookshop'
});
var reqPath = '';
var _id = '';
app.get("/loadData", function(req, res) {
	reqPath = req.path;
    res.sendFile(__dirname + '/index1.html');
});

app.get("/getEditData", function(req, res) {
	//res.send("Edit row : " + req.query.id);
	reqPath = req.path;
	_id = req.query.id;
    res.sendFile(__dirname + '/edit.html');
});

app.get("/getDeleteData", function(req, res) {
    res.send("Delete row : " + req.query.id);
});

io.on('connection', function(socket) {
    console.log("connected!");
	
	if(reqPath === '/loadData'){
		getData(function(req, res) {
            if (req) {
                io.emit('jsonObject', res);
            } else {
                io.emit('error');
            }
        });
	}else{
		if(reqPath === '/getEditData'){
			console.log("--getEditData---");
		getEdit(function(req, res) {
            if (req) {
                io.emit('jsonObject', res);
            } else {
                io.emit('error');
            }
        });
	  }
	}
        
});

var getData = function(callback) {
	var conn = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '1234',
	  database : 'bookshop'
	});
	 
	conn.connect();
	
	conn.query('select * from book', function (error, rows, fields) {
		if (error) {
            callback(false);
            return;
        }
        callback(true, rows);
		
	});

	conn.end();
}
var getEdit = function(callback) {
	var conn = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '1234',
	  database : 'bookshop'
	});
	 
	conn.connect();
	
	conn.query('select * from book', function (error, rows, fields) {
		if (error) {
            callback(false);
            return;
        }
        callback(true, rows);
		
	});

	conn.end();
}

http.listen(3000, function() {
    console.log("Listening on 3000");
});