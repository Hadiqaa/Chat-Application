const express = require("express");
const router = express.Router();
const AttachmentController = require('../controllers/attachment.controller');

router.post('/attachments', AttachmentController.createAttachment);
router.get('/attachments/message/:message_id', AttachmentController.getAttachmentsByMessageId);

module.exports = router;