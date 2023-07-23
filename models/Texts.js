const mongoose = require('mongoose');
const { Schema } = mongoose;

const TextsSchema = new Schema({
    // user:{
    //     type: mongoose.Schema.Types.ObjectId,
    // },
    Title:{
        type: String,
    },
    Text:{
        type: String,
    }
});
module.exports = mongoose.model('texts', TextsSchema);