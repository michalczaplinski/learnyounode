http = require('http')

url = process.argv[2]

var data = http.get(url, function (response) {

    var stream = ''

    response.on("error", function (error) {
        console.error('There was an error:', err)
    })

    response.on("data", function (data) {
        stream = stream + data.toString();
    })

    response.on("end", function () {
        console.log(stream.length);
        console.log(stream);

    })
})
