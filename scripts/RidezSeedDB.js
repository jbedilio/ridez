const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = Promise;

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect('mongodb://localhost/ridezdb', { useMongoClient: true });
};

const ridezSeed = [
    {
        username: 'jbedilio',
        start: 'Downtown Lakeland',
        stop: 'UCF Campus Orlando',
        details: 'Mon. - Fri. 8am & 3pm',
        date: new Date(Date.now())
    },{
        username: 'mojorison',
        start: 'Northside Tampa',
        stop: 'Westside Lakeland',
        details: 'Tues. - Sat. 6am & 2pm',
        date: new Date(Date.now())
    }, {
        username: 'purplehaze',
        start: 'Downtown Lakeland',
        stop: 'UCF Campus Orlando',
        details: 'Mon. - Fri. 8am & 3pm',
        date: new Date(Date.now())
    },
];

db.Ridez
    .remove({})
    .then(() => db.Ridez.collection.insertMany(ridezSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });