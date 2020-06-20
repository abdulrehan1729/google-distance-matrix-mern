const mongoose = require("mongoose");
const {
    Schema
} = mongoose;

const schema = new Schema({
    email: {
        type: String,
        require: true
    },
    source: {
        type: String,
        require: true
    },
    destination: {
        type: String,
        require: true
    },
    reaching_time: {
        type: Date,
        require: true
    },
    time_to_reach: {
        type: Date,
    }
})

const TravelTime = mongoose.model('TravelTime', schema)
module.exports = TravelTime