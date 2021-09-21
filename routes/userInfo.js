var express = require('express');
var router = express.Router();
const User = require('../models/user');
const auth = require('../middlewares/auth');

router.get('/me', auth, async (req, res) => {

  try {
    const user = await User.findById(req.user.id);
    return res.json({
      success: true,
      msg: "User fetched successfully",
      data: user
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      msg: "Error in fetching user"
    })
  }

});

module.exports = router;