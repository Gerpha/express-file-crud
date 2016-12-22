const express = require('express')
const app = express()
const port = process.argv[3] || 7070

app.listen(port, function() {
  console.log("Listening on port: " + port)
})
