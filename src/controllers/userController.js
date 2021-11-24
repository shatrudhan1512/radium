const userModel = require('../models/userModel')


const createUser = async function (req, res) {
    const userDetails = req.body
    let appType = req.headers['isFreeApp']
    let userType;
    if(appType === 'false') {
        userType = false
    } else {
        userType = true
    }
    userDetails.freeAppUser = req.isFreeApp
    const userCreated = await userModel.create(userDetails)

    res.send({data: userCreated })
}


module.exports.createUser = createUser
