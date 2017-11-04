const router = require('express').Router();
const ridezController = require('./../../controllers/ridezController.js');

//route = to /api/ridez
router.route('/')
.get(ridezController.findAll)
.post(ridezController.create);
// .post(ridezController.delete);

//route = /api/ridez/:username
router.route('/:id')
.get(ridezController.findById)
.post(ridezController.update)
.post(ridezController.delete);

module.exports = router;