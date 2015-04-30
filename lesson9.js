http = require('http')

var urls = process.argv.slice(2)

var output = []
output.length = urls.length
var counter = 0

urls.forEach( function(url, index, array) {

    http.get(url, function (response) {

        var stream = ''

        response.on("error", function (error) {
            console.error('There was an error:', err)
        })

        response.on("data", function (data) {
            stream = stream + data.toString();
        })

        response.on("end", function () {
            output.splice(index, 1, stream);
            counter += 1;

            if (counter == 3) {
                output.forEach( function (element, index, array) {
                    console.log(element);

                })
            }
        })
    })

})

