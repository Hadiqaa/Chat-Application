const express = require("express");
const router = express.Router();
const MessageController = require("../controllers/message.controller");


router.post("/createmessage", MessageController.sendMessage);
router.get("/groups/:group_id/messages", MessageController.getGroupMessages);

module.exports = router;
