var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();

var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res, param){
	let file = process.cwd() + '/views/index.html';                                                   
    res.writeHead(200, {"Content-Type": "text/html"});                                                 
    fs.createReadStream(file).pipe(res);
});

app.get('/chatform', function(req, res){
	console.log("Chatform!!!");
	let file = process.cwd() + '/views/chat.html';   
	res.sendfile(file);
});

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

server.listen(8080, function listening() {
	console.log('Listening on %d', server.address().port);
});
