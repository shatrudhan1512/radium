const express = require('express');

const router = express.Router();


const myAuthorController = require('../controllers/myAuthorController')
const myBookController = require('../controllers/myBookController')
const publisherControler = require('../controllers/publisherController')


router.post('/author',myAuthorController.createAuthors)
router.post('/createBooks', myBookController.createBook)
router.get('/books', myBookController.getAllBooks)
router.post('/publishers', publisherControler.createPublisher)


module.exports = router;