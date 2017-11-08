const path = require('path');
//grab an instance of express router
const express = require('express');
const router = express.Router();

//import the api controllers
const api = require('./api/index.js');


//api routes
router.use('/api', api);


//if no api routes are hit, send the React app
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, '../client/index.html'));
// });

module.exports = router;