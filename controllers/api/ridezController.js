const path = require('path');
const express = require('express');
const request = require('request');
const axios = require('axios');
//grab an instance of express router
const router = express.Router();
const mongoose = require('mongoose');

//import the models
const User = require('./../models/UserModel.js');
const Rating = require('./../models/RatingModel.js');

router.get('/', (req, res) => {
    res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);
});
    // res.render('root');
//});

router.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

module.exports = router;