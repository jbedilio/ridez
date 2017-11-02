//requiring mongoose & creating a Schema class with mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passLocalMon = require('passport-local-mongoose');

//making UserSchema a Schema
var UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        // required: 'Please create a user name.'
    },
    password: {
        type: String,
        trim: true,
        // required: 'Please enter a password.'
    },
    firstName: {
        type: String,
        trim: true,
        // required: 'Please enter your first name.'
    },
    lastName: {
        type: String,
        trim: true,
        // required: 'Please enter your last name.'
    },
    email: {
        type: String,
        unique: true,
        // match: [/.+\@.+\..+/, 'Please enter a valid e-mail address']
    },
    created: {
        type: Date,
        default: Date.now
    },
    //do you smoke?
    smoker: {
        type: Boolean,
        defualt: false,
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