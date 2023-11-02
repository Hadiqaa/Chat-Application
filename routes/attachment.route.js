const express = require('express');
const protect = require('../middleware/authentication');
const attachmentController = require('../controllers/attachment.controller');

const router = express.Router();

router.post('/attachments', protect, attachmentController.createAttachment);
router.get('/attachments/message', protect, attachmentController.getAttachmentsbyID);

module.exports = router;
