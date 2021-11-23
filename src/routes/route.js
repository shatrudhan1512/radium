const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController')
const middlewareController = require('../middlewares/middlewares')

router.post('/users', userController.createUser)
router.post('/login', userController.login)
router.get('/users/:userId', middlewareController.validation, userController.getUserDetails)
router.put('/users/:userId', middlewareController.validation, userController.userUpdates)

module.exports = router;