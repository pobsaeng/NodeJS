var express = require('express');
var app = express();

app.use(express.static(__dirname + 'public'));
app.use('/resources',express.static(__dirname + '/images'));
app.use('/images', express.static(__dirname + '/Images'));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(5000, function () {
    console.log('Listening on port ' + server.address().port);
});
   