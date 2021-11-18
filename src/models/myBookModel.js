const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    name: String,
    author : {
        type:ObjectId,
        ref:'myAuthor'
    },
    price:Number,
    rating : Number,
    publisher : {
        type:ObjectId,
        ref:"Publisher"
    }
},
{timestamps:true})


module.exports = mongoose.model('myBook',bookSchema)