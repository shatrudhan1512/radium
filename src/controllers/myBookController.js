const myAuthorModel = require('../models/myAuthorModel')
const publisherModel = require('../models/publisherModel')
const myBookModel = require('../models/myBookModel')

const createBook = async function (req, res) {
    const authorId = req.body.author
    const publisherId = req.body.publisher
    const reqFromAuthor = await myAuthorModel.findOne({_id:authorId})
    const reqFromPublisher = await publisherModel.findOne( {_id:publisherId})

    if (reqFromAuthor) {
        if (reqFromPublisher) {
            const bookDetails = await myBookModel.create(req.body)
            res.send({ Data: bookDetails })
        } else {
            res.send('Publisher id is not Valid')
        }
    } else {
        res.send('Author id is not valid')
    }

}

const getAllBooks = async function(req, res) {
    const booksData = await myBookModel.find().populate('author',{_id:1, author_name:1, age:1}).populate('publisher')
    res.send( {Data:booksData});
}

module.exports.createBook = createBook
module.exports.getAllBooks = getAllBooks