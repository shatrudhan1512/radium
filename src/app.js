
const obj = require("./logger")
const obj2 = require("./util/helper")
const obj3 = require("../validator/formatter")
const _ = require("underscore")
const obj4 = require("lodash")


obj.gbName('msg')
obj.gbWelcome()
console.log('This is FunctionUp URL :- ', obj.globalurl)

console.log("-----------------------------------------------")

obj2.gbDate()
obj2.gbMonth()
obj2.gbBatchInfo()

console.log("-----------------------------------------------")

obj3.gbTrim()
obj3.gbChangeToLowerCase()
obj3.gbChangeToUpperCase()

console.log("-----------------------------------------------")

console.log(_.first([11, 22, 33, 44, 55, 66], 3))
console.log(_.rest([11, 22, 33, 44, 55, 66], 2))
console.log(_.last([11, 22, 33, 44, 55, 66], 3))

console.log("-----------------------------------------------")

const array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];
console.log(obj4.chunk(array, 4))

console.log(obj4.tail([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]))

console.log(obj4.union([1, 2, 3], [3, 4, 5], [5, 6, 7], [7, 8, 9], [9, 10, 11]))

console.log(obj4.fromPairs([["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"]]))
