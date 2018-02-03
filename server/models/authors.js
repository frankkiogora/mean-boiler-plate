const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Defining model structure +++++++++++++CHANGE THIS FOR EVERY PROJECT

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String, required: [true, "An author must have a name"],
        minlength: [3, "An author must be at leats 3 characters long"]
    },

    quotes: [{ quote: { type: String,
         required: [true, "A quote must be provided"], 
         minlength: [3, "A quote must be at leats 3 characters long"]},
         votes: {type: Number,default:0}}]
    },

    {
        timestamps:true }
)

//set model in mongoose library   ++++++++++ CHANGE THIS PER PROJECT
mongoose.model('Author', AuthorSchema);