const express = require('express');

const router = new express.Router();

const ChatRoom = require('../models/chatRoom');

router.route('/')
  .get((req, res) => {
    ChatRoom.find({})
      .populate('comments').exec()
      .then(chatRooms => res.send(chatRooms))
      .catch(err => res.status(400).send(err));
  })
  .post((req, res) => {
    ChatRoom.create(req.body)
      .then(chatRoom => res.send(chatRoom))
      .catch(err => res.status(400).send(err));
  });

router.route('/:id')
  .get((req, res) => {
    ChatRoom.findById(req.params.id)
      .populate('comments').exec()
      .then(chatRoom => res.send(chatRoom))
      .catch(err => res.status(400).send(err));
  })
  .put((req, res) => {
    ChatRoom.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .then(ChatRoom.find({}))
      .then(chatRooms => res.send(chatRooms))
      .catch(err => res.status(400).send(err));
  })
  .delete((req, res) => {
    ChatRoom.findByIdAndRemove(req.params.id)
      .then(ChatRoom.find({}))
      .then(chatRooms => res.send(chatRooms))
      .catch(err => res.status(400).send(err));
  });

router.route('/:chatRoomId/addMessage/:messageId')
  .put((req, res) => {
    ChatRoom.findById(req.params.chatRoomId)
      .then((chatRoom) => {
        const messageId = req.params.messageId;
        chatRoom.comments.push(messageId);
        return chatRoom.save();
      })
      .then(saveChatRoom => res.send(saveChatRoom))
      .catch(err => res.status(400).send(err));
  });

module.exports = router;
