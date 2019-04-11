var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

var players = [
    { "id": 1, "firstName": "Lebron", "lastName": "James", "description": "Captain of the Cavaliers and a 3 time champion." },
    { "id": 2, "firstName": "Kyrie", "lastName": "Irving", "description": "One of the best ball handlers and scorers in the NBA." },
    { "id": 3, "firstName": "Kevin", "lastName": "Love", "description": "A three point threat and a rebounding machine." }
];

var newId = 4;

app.use(bodyParser.json());
app.options('/api/players', cors());
app.options('/api/players/:id', cors());

app.get("/api/players", cors(), function(req, res) {
    res.end(JSON.stringify(players));
});

app.post("/api/players", cors(), function(req, res) {
    req.body.id = newId;
    players.push(req.body);
    newId++;

    let jsonResponse = JSON.stringify(req.body);
    res.end(jsonResponse);
});

app.put("/api/players/:id", cors(), function(req, res) {
    let playerId = req.params.id;
    var player = players.find(player => player.id == playerId);

    if(player) {
        player.firstName = req.body.firstName;
        player.lastName = req.body.lastName;
        player.description = req.body.description;
    }

    res.end();
});

app.delete("/api/players/:id", cors(), function(req, res) {
    let playerId = req.params.id;
    let playerIndex = players.findIndex(player => player.id == playerId);

    if(playerIndex >= 0) {
        players.splice(playerIndex, 1);
    }

    res.end();
})

// Listen to events on http://{hostname}:8081
var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    if(!host || host === "::")
    {
        host = "localhost:";
    }
    
    console.log("Crud Server listening at http://%s%s", host, port);
});