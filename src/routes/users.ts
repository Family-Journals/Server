const express = require('express')
const userRouter = express.Router()

const createController = require('../controllers/users/create.ts')

userRouter.post('', createController.createUser)

export default module.exports = userRouter
