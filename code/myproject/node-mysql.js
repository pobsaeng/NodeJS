//var load = require('./load-mysql.js');
//load.loadData('LoadDataEvent');

var express = require('express');
var app = express();

var load = require('./load-mysql-test.js');

app.get('/getData', function (req, res) {
	load.getData(function(err, result, fields) {
		if (err) console.log(error)
			
		//fields name
		for(let i = 0; i < fields.length; i++){
			console.log( fields[i].name );
		}
		
		res.send(result);
	});
});
//----------------------------------------------------------------

var Q = require('q');
function async() {
    return Q.delay(1000)
}
async().then(function() {
    console.log('async called back');
});



var server = app.listen(5000, function () {
    console.log('Server is running..');
});