const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
    
    usedId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    hallId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hall' 
    },
    movieId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie'
    },
    bookingDate:{
        type:Date,
        default:Date.now
    },
    
    numberOfSeats:{
        type:Number,
        default:1
    },

    
})
const Booking = mongoose.model('Booking',bookingSchema);
module.exports = Booking;