const express = require('express');

const router = new express.Router();

const Message = require('../models/message');

router.route('/')
  .get((req, res) => {
    Message.find({})
      .then(messages => res.send(messages))
      .catch(err => res.status(400).send(err));
  })
  .post((req, res) => {
    Message.create(req.body)
      .then(message => res.send(message))
      .catch(err => res.status(400).send(err));
  });

router.route('/:id')
  .get((req, res) => {
    Message.findById(req.params.id)
      .then(message => res.send(message))
      .catch(err => res.status(400).send(err));
  })
  .put((req, res) => {
    Message.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .then(Message.find({}))
      .then(messages => res.send(messages))
      .catch(err => res.status(400).send(err));
  })
  .delete((req, res) => {
    Message.findByIdAndRemove(req.params.id)
      .then(Message.find({}))
      .then(messages => res.send(messages))
      .catch(err => res.status(400).send(err));
  });


module.exports = router;
