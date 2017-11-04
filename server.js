const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');
const request = require('request');
const pass = require('passport');
const LocalStrategy = require('passport-local');
// const io = require('socket.io')();

//setting mongoose to leverage built in ES6 Promises
mongoose.Promise = Promise;

//setting the PORT
var PORT = process.env.PORT || 3001;
// var PORT2 = process.env.PORT2 || 3002;

//grabbing an instance of express
const app = express();

//serve static content for the app from the "public" directory in the app directory
app.use(express.static('client/build'));

//setting the instance of express to use body-parser
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use(require('express-session')({secret: 'sweethomeindiana', resave: false, saveUninitialized: false}));
app.use(pass.initialize());
app.use(pass.session());

const User = require("./models/UserModel.js");
pass.use(new LocalStrategy(User.authenticate()));
pass.serializeUser(User.serializeUser());
pass.deserializeUser(User.deserializeUser());

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

// // io.on('connection', (socket) => {
//     // socket.emit('news', {hello: 'World'});
// // const socket = io;

// // socket.of('/io/chat').on('connection', function (socket) {
// //     socket.emit('a message', {
// //         message: 'only', '/chat': 'will get'
// //     });
// // });

// socket.on('connection', function (socket) {
//     console.log('a user connected');
// });

// socket.on('disconnect', function () {
//         console.log('user disconnected');
// });

// socket.on('subscribeToChat', (message) => {
//     console.log('client is subscribing to chat');
//     setInterval(() => {
//         socket.emit('timer', new Date());
//     }, interval)
// });

const routes = require('./routes');

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});

// io.listen(PORT2);
// console.log(`🏁 ==> IO Server now listening on PORT ${PORT2}!`);