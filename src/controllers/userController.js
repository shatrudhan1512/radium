const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createUser = async function (req, res) {
    const userDetails = req.body
    const userCreated = await userModel.create(userDetails)

    res.send({ status: true, data: userCreated })
}


const login = async function (req, res) {
    const reqName = req.body.name
    const reqPassword = req.body.password
    const usersData = await userModel.findOne({ name: reqName, password: reqPassword, isDeleted: false })
    if (usersData) {
        let payload = { data: usersData }
        let token = jwt.sign(payload, "shatrudhan")
        res.header('x-auth-token', token)
        res.send({ status: true, data: { userId: usersData._id }, token: token })
    } else {
        res.send({ status: false })
    }
}

const getUserDetails = async function (req, res) {
    const reqId = req.params.userId
    if(reqId == userModel._id) {
    const userDetails = await userModel.findOne({ _id: reqId, isDeleted: false })
    if (userDetails) {
        res.send({ status: true, data: userDetails })
    } else {
        res.send({ status: false, msg: "User not found" })
    }
} else {
    res.send( {status:false, msg:"user id not valid"})
}
}

const userUpdates = async function (req, res) {
    let reqemail = req.body.email
    let reqId = req.params.userId
    let userId = userModel._id

    if (reqId == userId) {
        const userDetails = await userModel.findOneAndUpdate({ _id: reqId}, { email: reqemail }, { new: true })
        if (userDetails) {
            res.send({ status: true, data: userDetails })
        } else {
            res.send({ status: false, msg: "User id not found" })
        }
    } else {
        res.send({ status: false, msg: "user is not valid" })
    }
}

module.exports.createUser = createUser
module.exports.login = login
module.exports.getUserDetails = getUserDetails
module.exports.userUpdates = userUpdates