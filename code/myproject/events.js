var events = require('events');
var e = new events.EventEmitter();

e.on('FirstEvent', function (a, b) {
    console.log( a + b );
});
e.emit('FirstEvent', 200, 100);