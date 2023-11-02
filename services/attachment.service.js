const Attachment = require('../models/attachment.model');

const createAttachment = async (fileurl, filename, message_id, creator_id) => {
  try {
    const attachment = await Attachment.create({
      fileurl,
      filename,
      message_id,
      creator_id,
    });
    return attachment;
  } catch (error) {
    console.error('Error in creating an attachment', error);
    throw error;
  }
};

const getAttachmentsById = async (message_id) => {
  try {
    const attachments = await Attachment.find({ message_id });
    return attachments;
  } catch (error) {
    console.error('Error retrieving attachments', error);
    throw error;
  }
};

module.exports = { createAttachment, getAttachmentsById };

