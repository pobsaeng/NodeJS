var events = require('events');
var _event = new events.EventEmitter();
var mysql = require('mysql');

module.exports.loadData = function loadData(eventName){
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '1234',
	  database : 'bookshop'
	});
	 
	connection.connect();
	request.query('select * from book', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
	connection.query('SELECT * from book', function (error, results, fields) {
	  var json = '';
	  if (error) throw error;
	  for(var i = 0; i < results.length; i++){
		  json += '{';
		for(key in results[i]) {
			json += '"'+key+'":"'+results[i][key]+'",';
		}
		json = json.substr(0, json.length - 1);
		json += '},';
	  }
	  json = json.substr(0, json.length - 1);
	  json = '['+json+']';

	  _event.emit(eventName, json );
	});

	connection.end();
}

_event.on('LoadDataEvent', function (data) {
	console.log('----------------- LoadDataEvent -----------------');
	var jsonObj = JSON.parse( data );
    console.log( jsonObj );
	
});

//module.exports.loadData = loadData;