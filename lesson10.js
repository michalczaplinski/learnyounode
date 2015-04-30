var net = require('net')
var port = process.argv[2]
var moment = require('moment')

server = net.createServer( function (socket) {

    var now = moment().format('YYYY-MM-DD HH:mm');

    socket.write(now)

    socket.end()
});

server.listen(port);

