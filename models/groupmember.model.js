const mongoose = require('mongoose');

// Define a schema for the Group_participants collection
const groupMemberSchema = new mongoose.Schema({
  group_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group', // Reference to the Group model
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  // You can add other fields specific to your needs
});

// Create a Mongoose model for the Group_participants collection
const GroupMember = mongoose.model('GroupMember', groupMemberSchema);

module.exports = GroupMember;
