var express = require('express');
var router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');


router.post('/login', async (req, res) => {
  console.log("recieved payload", req.body);

  const { email, password } = req.body;

  try {
    let user = await User.findOne({
      email
    })

    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "User does not exists"
      })
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        msg: "Incorrect password"
      })
    }

    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(
      payload,
      config.JWT_SECRET,
      {
        expiresIn: 3600
      },
      (err, token) => {
        if (err) throw err;
        return res.status(200).json({
          token
        })
      }
    )

  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      success: false,
      msg: "Server error"
    })
  }

});

module.exports = router;
