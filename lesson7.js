http = require('http')

url = process.argv[2]

var data = http.get(url, function (response) {

    // response.setEncoding('utf8');

    response.on("error", function (error) {
        console.error('There was an error:', err)
    })

    response.on("data", function (data) {
        console.log(data.toString())

    })
})
