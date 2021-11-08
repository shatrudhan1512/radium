function trim() {
    let name = "   Shatrudhan Kumar        "
    console.log(name.trim())
}

function changeToLowerCase() {
    const name = "Shatrudhan Kumar"
    console.log(name.toLowerCase())
}

function changeToUpperCase() {
    const name = "Shatrudhan Kumar"
    console.log(name.toUpperCase())
}

module.exports.gbTrim = trim
module.exports.gbChangeToLowerCase = changeToLowerCase
module.exports.gbChangeToUpperCase = changeToUpperCase