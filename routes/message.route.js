const express = require("express");
const router = express.Router();
const MessageController = require("../controllers/message.controller");


router.post("/createmessage", MessageController.createMessage);

module.exports = router;
