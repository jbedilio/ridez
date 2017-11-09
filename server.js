const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');
const request = require('request');//
const passport = require('passport');
const LocalStrategy = require('passport-local');

//grabbing an instance of express
const app = express();

//setting mongoose to leverage built in ES6 Promises
mongoose.Promise = global.Promise;

//setting the PORT
var PORT = process.env.PORT || 3001;

//serve static content for the app from the "public" directory in the app directory
app.use(express.static('client/build'));

//setting the instance of express to use body-parser
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use(require('express-session')({secret: 'sweethomeindiana', resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

const User = require("./models/UserModel.js");
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect('mongodb://localhost/ridezdb', { useMongoClient: true });
};

const db = mongoose.connection;

db.on('error', error => {
    console.log('Mongoose error: ', error);
});

db.once('open', () => {
    console.log('Mongoose in the hizzy!');
});

const routes = require('./routes/index.js');

app.use(routes);

app.get('*', function (req, res) {
    if (process.env.NODE_ENV === 'production') {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    } else {
        res.sendFile(path.join(__dirname, '../client/public/index.html'));
    }
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});