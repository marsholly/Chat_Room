const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  userName: {
    first: { type: String, minlength: 1, require: true },
    last: { type: String, require: true },
  },
  content: { type: String, require: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
