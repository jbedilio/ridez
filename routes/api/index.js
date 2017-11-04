const router = require('express').Router();
const auth = require('./auth.js');
const ridez = require('./ridez.js');

//auth routes - /api/auth
router.use('/auth', auth);

//ridez routes - /api/ridez
router.use('/ridez', ridez);

module.exports = router;