const mongoose = require('mongoose');

// Define a schema for the Groups collection
const groupSchema = new mongoose.Schema({
  group_name: String,
  creator_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  // You can add other fields specific to your needs
});

// Create a Mongoose model for the Groups collection
const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
