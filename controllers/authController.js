const pass = require('passport');
const User = require('./../models/UserModel.js');
const router = require('express').Router();

module.exports = {
    //routes use preceeding /api/auth
    register: ((req, res) => {
        User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
            if(err){
                console.log('1: ', req.body, err)
               return res.status(500).json({error: err});
            }
            console.log('2: ', req.body)
            pass.authenticate('local')((requ, resp) => {
                return resp.status(200).json({result: 'success', user: user});
            });
        });
    }),

    login: ((req, res) => {
        pass.authenticate('local')((requ, resp) => {
            console.log(req, res);
            console.log(requ, resp);
           return resp.status(200).json({result: 'success', user: req.user, session: req.session})
        });
    }),

    logout: ((req, res) => {
        req.logOut();
        res.status(200).json({result: 'success'})
    }),
};