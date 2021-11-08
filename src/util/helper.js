function printDate() {
    console.log(Date())
}

function printMonth() {
    const a = new Date()
    console.log(a.getMonth())
}

function getBatchInfo() {
    console.log("My Current Batch Name is Radium")
    console.log("This is week 4 and Day 1")
    console.log("Today topic is :- How to Create Own Module")
}

module.exports.gbDate = printDate
module.exports.gbMonth = printMonth
module.exports.gbBatchInfo = getBatchInfo