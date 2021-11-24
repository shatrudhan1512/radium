const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createUser = async function (req, res) {
    const userDetails = req.body
    try {
        const userCreated = await userModel.create(userDetails)

        res.status(201).send({ status: true, data: userCreated })
    } catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}

const login = async function (req, res) {
    try{
    const reqName = req.body.name
    const reqPassword = req.body.password
    const usersData = await userModel.findOne({ name: reqName, password: reqPassword, isDeleted: false })
    if (usersData) {
        let generatedToken = jwt.sign({userId:usersData._id }, "shatrudhan")
        res.header('x-auth-token', generatedToken)
        res.send({ status: true, data: { userId: usersData._id }, token: generatedToken })
    } else {
        res.send({ status: false , msg:"user doesn't exist"})
    }
} catch(err) {
    res.status(500).send( {status:false, msg:err.message})
}
}

const getUserDetails = async function (req, res) {
    try{
    const reqId = req.params.userId
    const decodeUserToken = req.user
    if (reqId == decodeUserToken.userId) {
        const userDetails = await userModel.findOne({ _id: reqId, isDeleted: false })
        if (userDetails) {
            res.status(200).send({ status: true, data: userDetails })
        } else {
            res.status(404).send({ status: false, msg: "User not found" })
        }
    } else {
        res.status(404).send({ status: false, msg: "user id not valid or maybe You are tying to access Someone else data" })
    }
} catch(err) {
    res.status(500).send({status:false, msg:err.message})
}
}

const userUpdates = async function (req, res) {
    try{
    let reqemail = req.body.email
    let reqId = req.params.userId
    let decodeUserToken = req.user

    if (reqId == decodeUserToken.userId) {
        const userDetails = await userModel.findOneAndUpdate({ _id: reqId }, { email: reqemail }, { new: true })
        if (userDetails) {
            res.status(200).send({ status: true, data: userDetails })
        } else {
            res.status(404).send({ status: false, msg: "User not found" })
        }
    } else {
        res.status(403).send({ status: false, msg: "user is not valid or maybe you try to access another account" })
    }
    } catch(err) {
        res.status(500).send({status:false, msg:err.message})
    }
}

module.exports.createUser = createUser
module.exports.login = login
module.exports.getUserDetails = getUserDetails
module.exports.userUpdates = userUpdates