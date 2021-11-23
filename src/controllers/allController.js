
const dateLog = function(req, res) {
    console.log(Date())
}

const ipLog = function(req, res) {
    console.log(req.ip)
}
const route = function (req, res) {
    console.log(req.originalUrl)
}

module.exports.dateLog = dateLog
module.exports.ipLog = ipLog
module.exports.route = route