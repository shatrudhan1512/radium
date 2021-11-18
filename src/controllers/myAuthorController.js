const myAuthorModel = require('../models/myAuthorModel')

const createAuthors = async function(req, res) {
    const reqBody = req.body
    const authorDetails = await myAuthorModel.create(reqBody)
    res.send( {Data:authorDetails})
}

module.exports.createAuthors = createAuthors