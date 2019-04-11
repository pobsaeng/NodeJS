var object = require('./load-mysql-promise.js');

var events = require('events');
var ev = new events.EventEmitter();

var express = require('express');
var app = express();

object.getRows().then(function(rows){
	ev.emit('FirstEvent', rows ); //call event
},function(error){
	console.log(error);
});

//make event
ev.on('FirstEvent', function (rows) {
	//GET request
    app.get('/getData', function (req, res) {
		res.send(rows);
	});
});

var server = app.listen(8000, function () {
    console.log('Listening on port ' + server.address().port + ' is running..');
});