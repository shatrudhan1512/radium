const express = require('express');

const router = express.Router();

const Usercontroller = require('../controllers/userController')
const UserModel = require('../models/userModel')

const bookModel = require('../models/bookModel')
const bookController = require('../controllers/bookController')

const bookModel2 = require('../models/bookModel2')
const bookController2 = require('../controllers/bookController2')


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createUser', Usercontroller.createUser );
router.get('/getAllUsers', Usercontroller.getUsersData );


router.post('/createNewBooks', bookController.createNew);
router.get('/getAllBook', bookController.getAllBooks)


router.post('/createBook', bookController2.createBook)
router.get('/getBookList', bookController2.bookList)
router.get('/booksInYear', bookController2.getBooksInYear)
router.post('/particularBook', bookController2.getParticularBooks)
router.get('/getINRBooks', bookController2.getXINRBooks)
router.get('/randomBooks', bookController2.getRandomBooks)



module.exports = router;