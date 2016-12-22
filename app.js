const express = require('express')
const app = express()
const port = process.argv[3] || 7070
const data_store = require('./data_store.js')
const file = process.argv[2]

load_from_file()

app.listen(port, function() {
  console.log("Listening on port: " + port)
})
