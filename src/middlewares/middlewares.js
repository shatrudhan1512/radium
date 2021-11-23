const jwt = require('jsonwebtoken')

const validation = async function (req, res, next) {
    let token = req.headers['x-auth-token']
    if (!token) {
        res.send({ status: false, msg: "token not valid" })
    } else {
        let valid = jwt.verify(token, "shatrudhan")
        if (valid) {
            next()
        } else {
            res.send({ status: false, msg: "token validation error" })
        }
    }



}

module.exports.validation = validation