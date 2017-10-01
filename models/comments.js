const mongoose = require('mongoose');
const moment = require('moment');

const commentsSchema = mongoose.Schema({
    name : {type : String, required : true},
    text : { type : String, required : true},
    date : { type : String, default : moment().format('DD-MM-YYYY, hh:mm')}
});

const comments = mongoose.model('comments', commentsSchema);

module.exports = comments;