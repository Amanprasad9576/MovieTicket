const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    description:{
        type:String,
        required:true
    },
    casts:{
        type:[String],
        required:true
    },
    director:{
        type:String,
        required:true
    },
    duration:{
      type:Number,
      required:[true,"Duration is required"]
    },
    trailerUrl:{
        type:String,
        required:true
    },
    language:{
        type:[String],
        required:true,
        default: ["English"]
    },
    releaseDate:{
        type:Date,
        required:true,
    },
    releaseStatus:{
        type:String,
        enum:["Upcoming","Now Showing","Ended"],
        default:"Upcoming"
    }
}, {timestamps:true});

const Movie = mongoose.model('Movie',movieSchema);

module.exports = Movie;

