const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);

app.use(express.static(path.join(__dirname, '/st2-dev')));

app.get('/', function (req, res) {
    res.render('index', { layout : false });
});

server.listen(8080, function () {
    console.log('Listening on %d', server.address().port);
});

io.sockets.on('connection', function (socket) {
    socket.on('keep-alive', function () {
        socket.emit('keep-alive', null);
    });

    socket.on('login', function(data) {
        socket.on('register', function (socketId) {
            socket.volatile.emit('register', true);
        });

        socket.on('create', function (record) {
            var clientId = record.clientId;

            delete record.clientId;

            record.id = new Date().getTime();

            socket.broadcast.emit('create', {
                success : true,
                data    : [ record ]
            });

            record.clientId = clientId;

            socket.volatile.emit('create', {
                success : true,
                data    : [ record ]
            });
        });

        socket.on('create_user', function (record) {
            var clientId = record.clientId;

            delete record.clientId;

            record.id = new Date().getTime();

            socket.broadcast.emit('create_user', {
                success : true,
                data    : [ record ]
            });

            record.clientId = clientId;

            socket.volatile.emit('create_user', {
                success : true,
                data    : [ record ]
            });
        });

        socket.on('read_user', function() {
            var socks = io.sockets.sockets,
                users = [],
                sockId, sock;

            for (sockId in socks) {
                if (socks.hasOwnProperty(sockId)) {
                    sock = socks[sockId];

                    if (sock.username) {
                        users.push({
                            name : sock.username
                        });
                    }
                }
            }

            socket.broadcast.emit('read_user', {
                success : true,
                data    : users
            });

            socket.volatile.emit('read_user', {
                success : true,
                data    : users
            });
        });

        socket.volatile.emit('login', {
            success  : true,
            name     : socket.username = data.name,
            socketId : socket.id
        });
    });

    socket.on('typingchange', function(data) {
        socket.broadcast.emit('typingchange', data);
    });

    socket.on('disconnect', function () {
        socket.removeAllListeners('login');
        socket.removeAllListeners('create');
        socket.removeAllListeners('create_user');
        socket.removeAllListeners('read_user');
        socket.removeAllListeners('disconnect');
        socket.removeAllListeners('keep-alive');
        socket.removeAllListeners('typingchange');

        var socks = io.sockets.sockets,
            users = [],
            sockId, sock;

        for (sockId in socks) {
            if (socks.hasOwnProperty(sockId)) {
                sock = socks[sockId];

                if (sock.username && (sock.id !== socket.id)) {
                    users.push({
                        name : sock.username
                    });
                }
            }
        }

        socket.broadcast.emit('read_user', {
            success : true,
            data    : users
        });
    });
});