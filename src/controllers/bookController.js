const bookController = require('../models/bookModel')

const createNewBook = async function (req,res) {
    const reqBook = req.body;
    const Saved = await bookController.create(reqBook)
    res.send( {msg : Saved})
    
}


const getBooksName = async function(req,res) {
    
}
