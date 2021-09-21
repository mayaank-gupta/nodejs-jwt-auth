var express = require('express');
var router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
  console.log("recieved payload", req.body);

  const { name, email, password, phone } = req.body;

  try {
    let user = await User.findOne({
      email
    })

    if (user) {
      return res.status(400).json({
        success: false,
        msg: "User already exists"
      })
    }

    user = new User({
      name, email, password, phone
    })

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    user.save((err, result) => {
      if (err) {
        console.log("Error while saving", err)
      }

      return res.status(201).json({
        success: true,
        msg: "Account created successfully",
        data: result
      })

    })

  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      success: false,
      msg: "Error in saving user"
    })
  }

});

module.exports = router;
