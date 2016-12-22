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
  },

  get_book_by_id(id) {
    let book = JSON.parse(global)
    let result = book.find(x => x.id === id)
    return result// ? result : undefined
  }

}
