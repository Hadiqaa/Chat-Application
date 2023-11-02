const AttachmentService = require('../services/attachment.service');
const { Request, Response } = require('express');

const createAttachment = async (req, res) => {
  try {
    const { fileurl, filename, message_id } = req.body;
    const user = req.user;

    if (!user) {
      console.error('User object is null or undefined.');
      return res.status(500).json({ message: 'Internal server error' });
    }

    const newAttachment = await AttachmentService.createAttachment(
      fileurl,
      filename,
      message_id,
      user.id
    );

    console.log('creator_id here ', user.id);
    res.status(200).json({ message: 'Attachment creation successful', data: newAttachment });
  } catch (error) {
    console.error('Error creating attachment:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getAttachmentsbyID = async (req, res) => {
  try {
    const { message_id } = req.body;
    const getAttachments = await AttachmentService.getAttachmentsById(message_id);

    res.status(200).json({ message: 'Retrieving Attachment by ID successful', data: getAttachments });
  } catch (error) {
    console.error('Error retrieving attachments:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { createAttachment, getAttachmentsbyID };
