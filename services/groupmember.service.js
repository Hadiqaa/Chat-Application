const GroupMember = require('../models/groupmember.model');
const Group = require('../models/group.model');
const mongoose = require('mongoose');

const addMemberToGroup = async (group_id, user_id) => {
  try {
    const group = await Group.findById(group_id);
  
    if (!group) {
      throw new Error('Group not found');
    }

    const existingMember = await GroupMember.findOne({  group_id, user_id });

    if (existingMember) {
      throw new Error('User is already a member of the group');
    }

    await GroupMember.create({  group_id, user_id });
    
  } catch (error) {
    console.error('Error adding a member to the group', error);
    throw error;
  }
};

const removeMemberFromGroup = async (group_id, user_id) => {
  try {
    await GroupMember.deleteOne({ user_id, group_id });
  } catch (error) {
    console.error('Error removing a member from the group', error);
    throw error;
  }
};

module.exports = { addMemberToGroup, removeMemberFromGroup };





