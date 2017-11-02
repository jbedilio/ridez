const path = require('path');
const express = require('express');
//grab an instance of express router
const router = express.Router();


//import the api controllers
const api = require('./api')

//api routes
router.use('/api', api);

//if no api routes are hit, send the React app
// router.use((req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

module.exports = router;