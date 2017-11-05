//requiring mongoose & creating a Schema class with mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passLocalMon = require('passport-local-mongoose');

//making UserSchema a Schema
var UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        // required: true
    },
    password: {
        type: String,
        trim: true,
        // required: true
    },
    firstName: {
        type: String,
        trim: true,
        // required: true
    },
    lastName: {
        type: String,
        trim: true,
        // required: true
    },
    email: {
        type: String,
        // unique: true,
        // match: [/.+\@.+\..+/],
        // required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    //do you smoke?
    smoker: {
        type: Boolean,
        // default: false,
    },
    openSeats: {
        type: Number,
        min: 1,
        max: 7
    },
    //rated by other users
    rating: [{
        type: Schema.Types.ObjectId,
        ref: 'Rating'
    }]
});

UserSchema.plugin(passLocalMon);

const User = mongoose.model('User', UserSchema)
module.exports = User;