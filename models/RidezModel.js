const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RidezSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    stop: {
        type: String,
        required: true
    },
    details: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Ridez = mongoose.model('Ridez', RidezSchema);
module.exports = Ridez;