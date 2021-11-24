const jwt = require('jsonwebtoken')

const validation = async function (req, res, next) {
    try {
        let token = req.headers['x-auth-token']
        if (!token) {
            res.status(401).send({ status: false, msg: "Token is mendatory" })
        } else {
            let decodeToken = jwt.verify(token, "shatrudhan")
            if (decodeToken) {
                req.user = decodeToken
                const reqId = req.params.userId
                const decodeUserToken = req.user
                if (decodeUserToken.userId == reqId) {
                    next()
                } else {
                    res.status(404).send({ status: false, msg: "You are Not logedin" })
                }
            } else {
                res.status(401).send({ status: false, msg: "token validation error" })
            }
        }

    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }

}

module.exports.validation = validation