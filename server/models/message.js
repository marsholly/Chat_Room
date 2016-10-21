const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  content: { type: String, require: true },
  createAt: { type: Date, default: Date.now, required: true },
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
