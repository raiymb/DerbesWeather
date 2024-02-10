const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const generateToken = (user) => {
  return jwt.sign({
    id: user._id,
    username: user.username,
    isAdmin: user.isAdmin
  }, process.env.JWT_SECRET, { expiresIn: '15m' });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};
