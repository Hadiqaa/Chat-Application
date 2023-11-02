const mongoose = require('mongoose');

// Define a schema for the Attachments collection
const attachmentSchema = new mongoose.Schema({
  fileurl: String,
  filename: String,
  message_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message', // Reference to the Message model
    required: true,
  },
  creator_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  // You can add other fields specific to your needs
});

// Create a Mongoose model for the Attachments collection
const Attachment = mongoose.model('Attachment', attachmentSchema);

module.exports = Attachment;
