const mongoose = require('mongoose');

const apiDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  apiName: {
    type: String,
    required: true
  },
  data: {
    type: mongoose.Schema.Types.Mixed, 
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ApiData = mongoose.model('ApiData', apiDataSchema);

module.exports = ApiData;
