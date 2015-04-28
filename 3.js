var fs = require('fs')

var file = fs.readFileSync(process.argv[2])

var file_length = file.toString().split('\n').length - 1

console.log(file_length)
