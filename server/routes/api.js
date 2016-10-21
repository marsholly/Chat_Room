const express = require('express');

const router = new express.Router();

router.use('/chatRooms', require('./chatRooms'));
router.use('/messages', require('./messages'));

module.exports = router;
