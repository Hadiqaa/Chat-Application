const express = require('express');
const protect = require('../middleware/authentication');
const messageController = require('../controllers/message.controller');
const router = express.Router();

router.post('/createmessage', protect, messageController.sendMessage);
router.get('/groupmessages', protect, messageController.getGroupMessages);
router.get('/usermessages', protect, messageController.getMessagesOfUsers);

module.exports = router;
