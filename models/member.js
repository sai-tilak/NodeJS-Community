const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
