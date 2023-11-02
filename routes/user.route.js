const express = require('express');
const userController = require('../controllers/user.controller');
const protect = require('../middleware/authentication');
const router = express.Router();

router.get('/users', protect, userController.getUsers);
router.put('/updatename', protect, userController.updateUsername);

module.exports = router;

