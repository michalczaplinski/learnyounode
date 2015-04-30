var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var filename = process.argv[3];

server = http.createServer( function (request, response) {

    response.writeHead(200, { 'content-type': 'text/plain' })

    file = fs.createReadStream(filename);

    file.pipe(response);

});

server.listen(port);

