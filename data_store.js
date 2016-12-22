const path = require('path')
const fs = require('fs')
let global = null

module.exports = function load_from_file(){
  fs.readFile(file, 'utf8', function(err, data) {
    if (err) {
      throw err
    }
    global = data
    return global
  })
}




// fs.readFile(process.argv[2], 'utf8', function(err, data) {
//   if (err) {
//     throw err
//   }
//   var lines = data.split('\n')
//   console.log(lines.length - 1)
// })
