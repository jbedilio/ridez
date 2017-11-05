const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = Promise;

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect('mongodb://localhost/ridezdb', { useMongoClient: true });
};

const userSeeds = [
    {   
        username: 'jbedilio',
        password: '01rx7gtu',
        firstName: 'Josh',
        lastName: 'Bedilion',
        email: 'jbedilio@yahoo.com',
        created: new Date(Date.now()),
        smoker: false,
        openSeats: 2,
        rating: []
    },{
        username: 'mojorison',
        password: '07031971',
        firstName: 'Jim',
        lastName: 'Morrison',
        email: 'mojorison@gmail.com',
        created: new Date(Date.now()),
        smoker: true,
        openSeats: 2,
        rating: []
    },{
        username: 'purplehaze',
        password: 'ou812',
        firstName: 'Jimmy',
        lastName: 'Hendrix',
        email: 'purplehaze@gmail.com',
        created: new Date(Date.now()),
        smoker: true,
        openSeats: 2,
        rating: []
    }
];

db.Users
    .remove({})
    .then(() => db.Users.collection.insertMany(usersSeed))
    .then(data => {
        console.log(data.insertedIds.length + " users inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });