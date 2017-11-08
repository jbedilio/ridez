const mongoose = require('mongoose');
const db = require('../models/index.js');

module.exports = {
    findAll: function (req, res) {
        if (req.user) {
            db.Ridez
                .find(req.query)
                .sort({ date: -1 })
                .then(dbModel => res.json({ results: dbModel, sess: req.session }))
                .catch(err => res.status(422).json(err));
        }
        else { res.json({ error: "Please login", statusCode: 401 }) }
    },
    findById: function (req, res) {
        if (req.user) {
            db.Ridez
                .findById(req.params.id)
                .then(dbModel => res.json({ results: dbModel, sess: req.session }))
                .catch(err => res.status(422).json(err));

        }
        else { res.json({ error: "Please login", statusCode: 401 }) }
    },
    create: function (req, res) {
        if (req.user) {
            db.Ridez
                .create(req.body)
                .then(dbModel => res.json({ results: dbModel, sess: req.session }))
                .catch(err => res.status(422).json(err));

        }
        else { res.json({ error: "Please login", statusCode: 401 }) }
    },
    update: function (req, res) {
        if (req.user) {
            db.Ridez
                .findOneAndUpdate({ _id: req.params.id }, req.body)
                .then(dbModel => res.json({ results: dbModel, sess: req.session }))
                .catch(err => res.status(422).json(err));

        }
        else { res.json({ error: "Please login", statusCode: 401 }) }
    },
    remove: function (req, res) {
        if (req.user) {
            db.Ridez
                .findById({ _id: req.params.id })
                .then(dbModel => dbModel.remove())
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
        }
        else { res.json({ error: "Please login", statusCode: 401 }) }
    }
};