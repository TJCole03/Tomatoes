const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')


//Create User
router.post('/', userController.createUser)
//Login User
router.post('/login', userController.auth, userController.loginUser)
//Logout User 
router.post('/logout/:id', userController.auth, userController.logoutUser)

module.exports = router; 