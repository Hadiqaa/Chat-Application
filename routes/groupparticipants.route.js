const express = require("express");
const router = express.Router();
const PaticipantsController = require('../controllers/groupparticipants.controller');

router.post('/group-participants/add', PaticipantsController.addUserToGroup);
router.delete('/group-participants/remove', PaticipantsController.removeUserFromGroup);


module.exports = router;