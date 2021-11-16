const bookModel2 = require('../models/bookModel2')

const createBook = async function (req,res) {
    const reqBody = req.body;
    const saved = await bookModel2.create(reqBody)
    res.send( {msg : saved})
}


const bookList = async function (req,res) {
    const data = await bookModel2.find().select( {bookName:1, authorName:1, _id:0 })
    res.send( {msg: data})
}

const getBooksInYear = async function (req, res) {
    const reqYear = req.body.year;
    const data = await bookModel2.find( {year : reqYear})
    res.send( {msg :data})
}

const getParticularBooks = async function (req, res) {
    const reqinput = req.body;
    const data = await bookModel2.find(reqinput)
    res.send( {msg: data})
}

const getXINRBooks = async function (req, res) {
    const data = await bookModel2.find( {"prices.indianPrice": {$in:["100INR", "200INR", "500INR"]}})
    res.send( {msg: data})
}

const getRandomBooks = async function (req, res) {
    const data = await bookModel2.find( {$or :[{totalPages: {$gt : 500}},{stockAvailable :true}]})
    res.send( {msg: data})
}

module.exports.createBook = createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks = getRandomBooks