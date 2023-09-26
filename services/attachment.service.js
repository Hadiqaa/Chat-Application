const Attachments = require('../models/').Attachments;

// Function to create a new attachment
const  createAttachment = async (fileUrl, fileName, messageId, creatorId) => {
  try {
    const attachment = await Attachments.create({
      file_Url: fileUrl,
      file_Name: fileName,
      message_id: messageId,
      creator_id: creatorId,
    });

    return attachment;

  } catch (error) {

    console.error('Error in Creating an attachment', error);  
    throw new Error('Error in Creating an attachment');
  }
};

// Function to get attachments by message ID
const  getAttachmentsByMessageId = async (messageId) => {
  try {
    const attachments = await Attachments.findAll({
      where: { message_id: messageId },
    });

    return attachments;

  } catch (error) {

     console.error('Error in getting attachments by a message ID', error);  
    throw new Error('Error in getting attachments by a message ID');

  }
};

module.exports = {
  createAttachment,
  getAttachmentsByMessageId,
};
