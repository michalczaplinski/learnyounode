var fs = require('fs')
var path = require('path')

var give_files = function(directory, extension, callback) {
  fs.readdir(directory, function(err, list) {
    if (err) {
      return callback(err)
    }
    var filtered = list.filter(function(filename) {
      if ('.' + extension === path.extname(filename)) {
        return true
      }
    })
    callback(null, filtered)
  })
}

module.exports = give_files
