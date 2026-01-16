
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    movieId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie',
        required:true,
    },
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:['pending','completed','failed'],
        default:'pending'
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }

},{timestamps:true});

const Payment = mongoose.model('Payment',paymentSchema);
module.exports = Payment;