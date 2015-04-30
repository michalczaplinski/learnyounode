var http = require('http');

var port = process.argv[2];

server = http.createServer( function (request, response) {

    if (request.method != 'POST') {
        return response.end('send me a POST\n')
    }

    response.writeHead(200, { 'content-type': 'text/plain' })

    request.on('data',function(message){
        response.write(message.toString().toUpperCase());
     })

    request.on('end',function(){
        response.end();
    })

});

server.listen(port);

