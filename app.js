const express = require('express')
const app = express()
const port = process.argv[3] || 7070
const data_store = require('./data_store.js')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
data_store.load_from_file()

app.get('/api/books', (req, res) => {
  let data = data_store.get_all_books()
  res.send(data)
})

app.get('/api/books/:id', jsonParser, (req, res) => {
  let id = Number(req.params.id)
  let object = data_store.get_book_by_id(id)
  if (object) {
    res.send(object)
  }
  else {
    res.sendStatus(404)
  }
})

app.listen(port, function() {
  console.log("Listening on port: " + port)
})
