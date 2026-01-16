const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
    movieId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie',
    },
    hallId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hall'  
    },
      
});
const Show = mongoose.model('Show',showSchema);
module.exports = Show;
