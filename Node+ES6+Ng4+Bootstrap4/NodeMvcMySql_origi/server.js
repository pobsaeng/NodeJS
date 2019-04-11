const express = require('./config/express');
const mySqlConnection = require('./server-db.js');
const app = express();
const http = require('http');
const server = http.createServer(app);

server.listen(8080, function listening() {
    console.log('Listening on %d', server.address().port);
});

module.exports = app;