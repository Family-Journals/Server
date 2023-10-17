const express = require('express')
const app = express()
const PORT = 8080

app.get('/api/home', (req, res) => {
  req.json({ message: 'Hello World' })
})

app.listen(PORT, () => {
  console.log(`||||----Server started on port ${PORT}----||||`)
})

const test = 5
