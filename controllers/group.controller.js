const GroupService = require('../services/group.service');
const protect = require('../middleware/authentication')

const createGroup = async (req, res) => {
  try {
    const { group_name } = req.body;
    const user = req.user;

    if (!user) {
      console.error('User object is null or undefined.');
      return res.status(500).json({ message: 'Internal server error' });
    }

    const group = await GroupService.createGroup(user.id, group_name);
    console.log('user id here', user.id);

    res.status(200).json({ message: 'Group chat created successfully', data: group });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

const deletegroup = async (req, res) => {
  try {
    const { group_id } = req.body;
    await GroupService.deleteGroup(group_id);
    console.log('group id here', group_id);

    res.status(200).json({ message: 'Group chat deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

const getUsersOfGroup = async (req, res) => {
  try {
    const { group_id } = req.params;
    const users = await GroupService.getUsersOfGroup(parseInt(group_id));

    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = { createGroup, deletegroup, getUsersOfGroup };
