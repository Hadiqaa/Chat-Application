const Group = require('../models/group.model');
const GroupMember = require('../models/groupmember.model');
const Message = require('../models/message.model');
const User = require('../models/user.model');
const GroupMemberService = require('./groupmember.service')

const createGroup = async (creator_id, group_name) => {
  try {
    console.log('creator_id', creator_id);
    const group = await Group.create({
      creator_id,
      group_name,
    });

    // Assuming you have a function to add a member to the group
    await GroupMemberService.addMemberToGroup(group._id, creator_id);

    return group;
  } catch (error) {
    console.error('Error in creating a group', error);
    throw error;
  }
};

const getUsersOfGroup = async (group_id) => {
  try {
    const groupMembers = await GroupMember.find({
      group_id,
    });

    const userIDs = groupMembers.map((entry) => entry.user_id);

    const users = await User.find({
      _id: { $in: userIDs },
    });

    return users;
  } catch (error) {
    console.error('Error showing users of a group', error);
    throw error;
  }
};

const deleteGroup = async (group_id) => {
  try {
    await GroupMember.deleteMany({
      group_id,
    });

    await Message.deleteMany({
      group_id,
    });

    const deleteGroup = await Group.findOneAndDelete({
      _id: group_id,
    });

    if (!deleteGroup) {
      throw new Error('Group not found');
    }
  } catch (error) {
    console.error('Error in deleting a group', error);
    throw error;
  }
};

module.exports = { createGroup, deleteGroup, getUsersOfGroup };
