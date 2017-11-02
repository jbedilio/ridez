var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RatingSchema = new Schema({
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    created: {
        type: Date,
        default: Date.now
    }
})

var Rating = mongoose.model('Rating', RatingSchema);
module.exports = Rating;