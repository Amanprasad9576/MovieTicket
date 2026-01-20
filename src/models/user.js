const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        minLength:[3,"Name used be 3 character"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email must be unique"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
}, {timestamps:true});

const User = mongoose.model('User',userSchema);

module.exports = User;
