const express = require('express');
const GroupController = require('../controllers/group.controller');
const protect = require('../middleware/authentication');
const router = express.Router();

router.post('/creategroup', protect, GroupController.createGroup);
router.get('/groups/users', protect, GroupController.getUsersOfGroup);
router.delete('/deletegroups', protect, GroupController.deletegroup);

module.exports = router;
