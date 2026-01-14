const mongoose = require('mongoose');
const urlSchema = new mongoose.Schema({
    shortID : {
        type : String,
        required : true,
        unique : true,
    },
    originalUrl : {
        type : String,
        required : true,
}
});


const userSchema = new mongoose.Schema({
    name :{
        type :String,
        required:true,
    },
    email :{
        type : String,
        required : true,
        unique:true
    },
    password : {
        type :String ,
        required : true,
        unique : true
    }
});

const Url = mongoose.model("url", urlSchema);
const User = mongoose.model("user", userSchema);
module.exports = {Url , User}; 