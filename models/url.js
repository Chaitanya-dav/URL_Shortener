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

const Url = mongoose.model("url", urlSchema);
module.exports = Url; 