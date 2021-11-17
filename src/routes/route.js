const express = require('express');

const router = express.Router();

const Usercontroller = require('../controllers/userController')
const UserModel = require('../models/userModel')

const 


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createUser', Usercontroller.createUser );
router.get('/getAllUsers', Usercontroller.getUsersData );



module.exports = router;