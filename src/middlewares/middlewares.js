
const mid1 = function (req, res, next) {
    console.log("Hi I am middleware")
    next()
}

const mid2 = function (req, res, next) {
    console.log("Hi I am middleware")
    next()
}

const mid3 = function (req, res, next) {
    console.log("Hi I am middleware")
    next()
}

module.exports.mid1 = mid1
module.exports.mid2 = mid2
module.exports.mid3 = mid3