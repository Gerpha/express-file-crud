const express = require('express')
const app = express()
const port = 7070

app.listen(port, function() {
  console.log("Listening on port 7070. Go to http://localhost:7070/")
})
