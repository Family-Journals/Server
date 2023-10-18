const express = require('express');
const router = express.Router();

const createController = require('../controllers/users/create.ts')

router.post('', createController.createUser)

module.exports = router;