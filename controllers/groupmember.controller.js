const GroupMemberService = require('../services/groupmember.service');


const addMemberToGroup = async (req, res) => {
  try {
    const { group_id, user_id } = req.body;
    const groupMember = await GroupMemberService.addMemberToGroup(group_id, user_id);

    res.status(200).json({ message: 'Member Added in the group', data: groupMember });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

const removeMemberFromGroup = async (req, res) => {
  try {
    const { user_id, group_id } = req.body;
    await GroupMemberService.removeMemberFromGroup(user_id, group_id);
    res.status(200).json({ message: 'User removed from the group' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = { addMemberToGroup, removeMemberFromGroup };
