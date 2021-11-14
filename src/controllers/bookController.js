const bookModel = require('../models/bookModel')

const createNew = async function(req, res) {
    const data = req.body;
    const saved = await bookModel.create(data)
    res.send( {msg: saved})
}

const getAllBooks = async function(req, res) {
    const allBooks = await bookModel.find()
    res.send( {msg: allBooks} )
}

module.exports.createNew = createNew
module.exports.getAllBooks = getAllBooks