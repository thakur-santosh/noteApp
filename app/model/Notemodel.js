const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create schema
const noteSchema = new Schema({
    title :{
        type : String,
        required : true

    },
    description : {

        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    category : {
        type : Schema.Types.ObjectId,
        ref : 'Category'
    }
})
 
// create model constructor function
const Note = mongoose.model('Note',noteSchema)

module.exports = Note