(function() {
    var socket = io();
    $('form').submit(function() {
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });
    socket.on('user connected', function(msg) {
        $('#messages').append($('<li>').text(msg));
    });
    socket.on('user disconnected', function(msg) {
        $('#messages').append($('<li>').text(msg));
    });
    socket.on('chat message', function(msg) {
        $('#messages').append($('<li>').text(msg));
    });
})();