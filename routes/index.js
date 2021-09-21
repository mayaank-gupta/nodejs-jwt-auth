var express = require('express');
var router = express.Router();

router.use(require('./userSignup'));
router.use(require('./userLogin'));
router.use(require('./userInfo'));

module.exports = router;