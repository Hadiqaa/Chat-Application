const AttachmentService = require('../services/attachment.service');

// Function to create a new attachment
const createAttachment = async (req, res)  => {
  try {
    const { fileUrl, fileName, messageId, creatorId} = req.body;
    const attachment = await AttachmentService.createAttachment(
       fileUrl,
       fileName, 
       messageId, 
       creatorId
    );

    res.status(201).json(attachment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to get attachments by message ID
const getAttachmentsByMessageId = async (req, res) =>{
  try {
    const { message_id } = req.params;
    const attachments = await AttachmentService.getAttachmentsByMessageId(
      message_id
    );

    res.status(200).json(attachments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createAttachment,
  getAttachmentsByMessageId,
};