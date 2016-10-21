const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  useName: { type: String, require: true },
  content: { type: String, require: true },
  createAt: { type: Date, default: Date.now, required: true },
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
