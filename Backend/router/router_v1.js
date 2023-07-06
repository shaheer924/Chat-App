const express = require('express');

const router = express.Router()

const userController = require('../controller/userController')

router.get('/users', userController.getAllData)
router.post('/user/register', userController.register)
router.post('/user/login', userController.login)
router.put('/user/update/:id', userController.updateData)

module.exports = router