const fs = require('fs')
let global = null

module.exports = {

  load_from_file(){
    fs.readFile('./db/data.json', 'utf8', function(err, data) {
      if (err) {
        throw err
      }
      global = data
    })
  },

  get_all_books() {
    return global
  }


}
