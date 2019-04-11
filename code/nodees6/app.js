const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);
const routes = require('./routes');
var customers = require('./routes/customers');
var connection = require('express-myconnection');

//--------------------ExtJS---------------------
require('node-extjs');
console.log(Ext.getVersion().version); 
//----------------------------------------------

app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded());

//---------------------- begin routes ---------------------------
app.get('/', routes.index);
app.use(app.router);
//---------------------- end routes -----------------------------

server.listen(8080, function listening() {
    console.log('Listening on %d', server.address().port);
});


// require('./public/app/node/example');
