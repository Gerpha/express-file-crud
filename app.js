const express = require('express')
const app = express()
const port = process.argv[3] || 7070
const data_store = require('./data_store.js')

data_store.load_from_file()

app.get('/api/books', (req, res) => {
  let data = data_store.get_all_books()
  res.send(data)
})

app.listen(port, function() {
  console.log("Listening on port: " + port)
})
