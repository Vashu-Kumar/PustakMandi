const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, ' Book title required']
    },
    author : {
        type : String,
        required : [true, ' Author name is reqired']
    },
    genre : {
        type : String,
        required : [true, 'Genre is required']
    },
    status : {
        type : String,
        required : [true, 'Status is reqired'] 
    },
    imageURI : {
        type : String,
        default : ''
    },
})

module.exports = mongoose.model("Book", bookSchema);