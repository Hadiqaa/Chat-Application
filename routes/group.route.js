const express = require("express");
const router = express.Router();
const GroupController = require('../controllers/group.controller');

router.post('/groups', GroupController.createGroup);
router.get('/users/:user_id/groups', GroupController.getUsersGroup);
router.delete('/groups/:group_id', GroupController.deleteGroupwithMessages);


module.exports = router;