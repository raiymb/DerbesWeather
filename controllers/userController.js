const bcrypt = require('bcryptjs');
const User = require('../models/User');
const ApiData = require('../models/ApiData');

const addUser = async (req, res) => {
  const { username, password, isAdmin } = req.body;
  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({
      username,
      password: hashedPassword,
      isAdmin
    });

    await user.save();
    res.status(201).json({ msg: 'User created successfully', userId: user.id });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const editUser = async (req, res) => {
  const { username, isAdmin } = req.body;
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, { username, isAdmin }, { new: true });
    res.json(updatedUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ msg: 'User deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const getUserHistory = async (req, res) => {
  try {
    const history = await ApiData.find({ userId: req.user.id });
    res.json(history);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const updateLanguagePreference = async (req, res) => {
  const { userId, language } = req.body;
  try {
    await User.findByIdAndUpdate(userId, { preferredLanguage: language });
    res.json({ message: 'Language updated successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

module.exports = { addUser, editUser, deleteUser, getUser, getUserHistory, updateLanguagePreference };
