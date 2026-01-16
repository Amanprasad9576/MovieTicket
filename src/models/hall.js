const mongoose = require('mongoose');

const hallSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        unique:true
    },
    movie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie',
        required:true
    },
    capacity:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },

},{timestamp:true});
const Hall = mongoose.model('Hall',hallSchema);

module.exports = Hall;
