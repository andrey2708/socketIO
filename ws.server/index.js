var app = require('express')();
var http = require('http').Server(app);


const io = require('socket.io')(http, {
    cors: {
        origin: '*',
    }
});

app.get('/', function(req, res) {
    res.set('Access-Control-Allow-Origin', '*')
    res.sendfile('index.html');
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});

io.on('connection', function (socket) {       // функция соединения с браузером
    console.log('New connection - '+socket.id);

    // var user = socket.id;
    // socket.id

    // io.sockets.connected[socket.id].emit('msg', 'hello - '+socket.id);

    socket.disconnect();
    console.log('Disconnect - '+socket.id );

    io.sockets.emit('x', '123456789');

});
