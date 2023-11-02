const express = require('express');
const protect = require('../middleware/authentication');
const GroupMemberController = require('../controllers/groupmember.controller');
const router = express.Router();

router.post('/groupmembers/add', protect, GroupMemberController.addMemberToGroup);
router.delete('/groupmembers/remove', protect, GroupMemberController.removeMemberFromGroup);

module.exports = router;
