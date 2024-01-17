const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    maxPeople : {
        type : Number,
        required : true
    },
    cleanning : {
        type : Boolean,
        default : true
    },
    roomNumber : {
        number : Number,
        unAvalibleDates : {
            type : Date
        }
    },
}, {timestamps : true})

module.exports = mongoose.model('Room' , roomSchema)