const express = require('express');

const router = express.Router();

const Usercontroller = require('../controllers/userController')
const UserModel = require('../models/userModel')

const bookModel = require('../models/bookModel')
const bookController = require('../controllers/bookController')


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createUser', Usercontroller.createUser );
router.get('/getAllUsers', Usercontroller.getUsersData );


router.post('/createNewBooks', bookController.createNew);
router.get('/getAllBook', bookController.getAllBooks)

module.exports = router;