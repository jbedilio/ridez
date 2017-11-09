const path = require('path');
//grab an instance of express router
const express = require('express');
const router = express.Router();

//import the api controllers
const api = require('./api/index.js');


//api routes
router.use('/api', api);

router.get('*', function (req, res) {
    if (process.env.NODE_ENV === 'production') {
        res.sendFile(__dirname + '../client/build/index.html');
    } else {
        res.sendFile(__dirname + '../client/public/index.html');
    }
});
//if no api routes are hit, send the React app
// router.use('*', function (req, res) {
// if (process.env.NODE_ENV === 'production') {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// } else {
//     res.sendFile(path.join(__dirname, '../client/public/index.html'));
//     }
// });


module.exports = router;