const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = function (req, res, next) {

  const authToken = req.headers['token'];

  if (!authToken) {
    return res.status(401).json({
      success: false,
      msg: "Permission denied"
    })
  }

  try {
    const decoded = jwt.verify(authToken, config.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      msg: "Invalid token"
    })
  }

}