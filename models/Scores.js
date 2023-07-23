const mongoose = require('mongoose');
const { Schema } = mongoose;

const ScoresSchema = new Schema({
    User:{
        type: String,
    },
    Title:{
        type: String,
    },
    wordmin:{
        type: Number,
    },
    error:{
        type: Number,
    },
    words:{
        type: Number,
    },
    Date:{
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('scores', ScoresSchema);