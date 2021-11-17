const authorModel = require('../models/authorsModel')
const bookModel = require('../models/bookModel')

const createNewAuthor = async function (req,res) {
    const reqAuthor = req.body;
    const SavedData = await authorModel.create(reqAuthor)
    res.send( {msg : SavedData})
    
}


const getAuthorDetails = async function(req, res) {
    const allAuthorDetails = await authorModel.find()
}


module.exports.createNewAuthor = createNewAuthor
module.exports.getAuthorDetails = getAuthorDetails