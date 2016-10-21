const mongoose = require('mongoose');

const chatRoomSchema = new mongoose.Schema({
  name: { type: String, require: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
});

const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);
module.exports = ChatRoom;
