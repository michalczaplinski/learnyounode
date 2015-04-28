var fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function(err, data) {
    var file_length = data.split('\n').length - 1
    console.log(file_length)
})


