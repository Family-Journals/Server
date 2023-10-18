const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT
const baseURL = process.env.BASE_URL

const userRoutes = require('./src/routes/users.ts')

const app = express()

app.use(express.json())

app.use(`${baseURL}/users`, userRoutes)

app.listen(PORT, () => {
  console.log(`||||----Server started on port ${PORT}----||||`)
})
