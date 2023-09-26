const Group_Participants = require('../services/groupparticipants.service');

// Function to add a user to a group
async function addUserToGroup(req, res) {
  try {
    const { user_id, group_id } = req.body;
    await Group_Participants.addUsertoGroup(user_id, group_id);
    res.status(201).json({ message: 'User added to the group' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Function to remove a user from a group
async function removeUserFromGroup(req, res) {
  try {
    const { user_id, group_id } = req.body;
    await Group_Participants.removeUserFromGroup(user_id, group_id);
    res.status(200).json({ message: 'User removed from the group' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  addUserToGroup,
  removeUserFromGroup,
};