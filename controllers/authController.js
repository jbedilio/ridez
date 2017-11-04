const pass = require('passport');
const User = require('./../models/UserModel.js');
// const router = require('express').Router();

module.exports = {
    //routes use preceeding /api/auth
    register: function(req, res) {
        User.register(new User({username: req.body.username}), req.body.password, function (err, user) {
            if(err){
                console.log('err: ', err);
               return res.status(500).json({error: err});
            }
            pass.authenticate('local')(req, res, function () {
                return res.status(200).json({result: 'success', user: user});
            });
        });
    },

    login: function(req, res) {
        pass.authenticate('local')(req, res, function () {
            console.log(req, res);
           return res.status(200).json({result: 'success', user: req.user, session: req.session})
        });
    },

    logout: function(req, res) {
        req.logOut();
        return res.status(200).json({result: 'success'})
    },
};