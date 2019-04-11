const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);
const routes = require('./routes');
var customers = require('./routes/customers');
var connection = require('express-myconnection');
var mysql = require('mysql');

app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded());

app.use(
    connection(mysql, {
        host: 'localhost',
        user: 'root',
        password: '1234',
        port: 3306, //port mysql
        database: 'nodejs'

    }, 'pool') //or single

);
//---------------------- begin routes ---------------------------
app.get('/', routes.index);
app.get('/customers', customers.list);
app.use(app.router);
//---------------------- end routes -----------------------------

server.listen(8080, function listening() {
    console.log('Listening on %d', server.address().port);
});