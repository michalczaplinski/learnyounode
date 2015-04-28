var fs = require('fs')
var path = require('path')

var directory = process.argv[2]
var extension = process.argv[3]

fs.readdir(directory, function(err, list) {
  list.forEach(function(filename) {
    if ('.' + extension === path.extname(filename)) {
      console.log(filename)
    }
  })
})


