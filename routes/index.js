var express = require('express');
var router = express.Router();

router.use(require('./userSignup'));

module.exports = router;