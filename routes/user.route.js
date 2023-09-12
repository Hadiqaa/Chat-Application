const express = require("express");
const Auth = require("../middlewares/authentication.middleware");
const Validate = require("../middlewares/validation.middleware");
const router = express.Router();
const UserController = require("../controllers/user.controller");



router.get("/user", UserController.getUsers);
router.put("/profile", UserController.updateUsername);

module.exports = router;




