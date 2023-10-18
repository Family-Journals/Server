import express from 'express'
require('dotenv').config()

const PORT = process.env.PORT
const baseURL = process.env.BASE_URL

import userRouter from './src/routes/users'

const app = express()

app.use(express.json())

app.use(`${baseURL}/users`, userRouter)

app.listen(PORT, () => {
  console.log(`||||----Server started on port ${PORT}----||||`)
})
