const router = require('express').Router();
const auth = require('./auth');
const ridez = require('./ridez');

//auth routes - /api/auth
router.use('/auth', auth);

//ridez routes - /api/ridez
router.use('/ridez', ridez);

module.exports = router;