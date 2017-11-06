const express = require('express');
const router = express.Router();
const ridezController = require('../../controllers/ridezController');

//route = to /api/ridez
router.route('/')
.get(ridezController.findAll)
.post(ridezController.create);


//route = /api/ridez/:id
router.route('/:id')
.get(ridezController.findById)
.post(ridezController.update)
.post(ridezController.remove);

module.exports = router;