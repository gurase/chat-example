var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var chat = require('./chatserver.js');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

chat.onUserConnect(io); 

http.listen(3000, function() {
    console.log('listening on *:3000');
});