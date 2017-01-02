const fs = require('fs')
let global = null
var LAST_ID;

module.exports = {

  load_from_file(){
    fs.readFile('./db/data.json', 'utf8', function(err, data) {
      if (err) {
        throw err
      }
      global = data
      LAST_ID = Math.max(...global)
    })
  },

  get_all_books() {
    return global
  },

  get_book_by_id(id) {
    let book = JSON.parse(global)
    let result = book.find(x => x.id === id)
    return result ? result : undefined
  },

  write_to_file() {
    fs.writeFile('./db/data.json', global, 'utf8', (err, data) => {
      if (err) {
        throw err
      }
      return global
    })
  },

//   add_book(obj) {
//     obj.id = LAST_ID + 1
//   }
//
// }
