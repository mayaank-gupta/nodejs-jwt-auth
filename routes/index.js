var express = require('express');
var router = express.Router();

router.use(require('./userSignup'));
router.use(require('./userLogin'));

module.exports = router;