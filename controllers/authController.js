const User = require('../models/User');
const { hashPassword, verifyPassword } = require('../utils/hashService');
const { generateToken } = require('../utils/tokenService');

const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const hashedPassword = await hashPassword(password);

    user = new User({
      username,
      password: hashedPassword,
    });

    await user.save();

    const token = generateToken(user.id);

    res.status(201).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await verifyPassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = generateToken(user.id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  register,
  login,
};
