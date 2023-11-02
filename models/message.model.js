const mongoose = require('mongoose');

// Define a schema for the Message collection
const messageSchema = new mongoose.Schema({
  text: String,
  sender_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  reciever_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  group_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group', // Reference to the Group model
  },
  // You can add other fields specific to your needs
});

// Create a Mongoose model for the Message collection
const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
