(function() {
    module.exports.onUserConnect = function(io) {
        io.on('connection', function(socket) {
            io.emit('user connected', 'A user has connected.');
            
            socket.on('disconnect', function() {
                io.emit('user disconnected', 'A user has disconnected.');
            });
            
            socket.on('chat message', function(msg) {
                io.emit('chat message', msg);
            });
        });
    };
})();