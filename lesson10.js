net = require('net')
port = process.argv[2]

sever = net.createServer( function (socket) {
    socket.write()

    socket.end()
});

server.listen(port);

