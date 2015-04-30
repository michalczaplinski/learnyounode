var http = require('http');
var moment = require('moment');
var url = require('url');

var port = process.argv[2];

var server = http.createServer( function(request, response){

    response.writeHead(200, { 'content-type': 'application/json' })

    var path = url.parse(request.url).pathname;

    if (path == '/api/parsetime') {

        var time = parse_time(request);

        response.end( JSON.stringify( {
            hour: time.hour(),
            minute: time.minute(),
            second: time.second()
        }));

    } else if (path == '/api/unixtime') {

        var time = parse_time(request);

        response.end( JSON.stringify({
            unixtime: time.valueOf()
        }))
    }

    else {

        console.log('bad url');
        response.end('there is no such page');
    }
 });

server.listen(port);

function parse_time(request) {
    var query = url.parse(request.url).query.split('iso=')[1];
    return moment(query)
}
