const publisherModel = require('../models/publisherModel')

const createPublisher = async function (req, res) {
    const reqData= req.body
    const publisherData = await publisherModel.create(reqData)

    res.send( {Data: publisherData})
}

module.exports.createPublisher = createPublisher