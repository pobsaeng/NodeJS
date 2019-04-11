const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const app = express();
const server = http.createServer(app);
const routes = require('./routes');
const io = require('socket.io').listen(server);

app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/public')));

//---------------------- begin routes ---------------------------
app.get('/', routes.index);
//---------------------- end routes -----------------------------

//----------------------- socket talk ---------------------------
var count = 1;
var users = [];
io.on('connection', function(socket){
  console.log('Number of people in chat room ' + count++);
  
  socket.on('_username', function(data){
    if(users.indexOf(data) > -1){
      socket.emit('_userExists', ' มีคน online ชื่อ '+data+' นี้แล้ว!');
	  
    }else{
      users.push(data);
      socket.emit('_userSet', {username: data});
    }
  });
  socket.on('msg', function(data){
      //Send message to everyone
      io.sockets.emit('newmsg', data);
  })
});
//----------------------- end socket talk ------------------------

server.listen(5000, function listening() {
	console.log('Listening on %d', server.address().port);
});