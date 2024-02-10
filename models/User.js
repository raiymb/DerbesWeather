const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  updateDate: Date,
  deletionDate: Date,
  isAdmin: {
    type: Boolean,
    default: false
  },
  preferredLanguage: { 
    type: String,
     default: 'en' 
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
