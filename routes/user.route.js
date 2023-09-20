const express = require("express");
const Auth = require("../middlewares/authentication.middleware");
const router = express.Router();
const UserController = require("../controllers/user.controller");



router.get("/user", UserController.getUsers);
router.put("/updatename", UserController.updateUsername);

module.exports = router;


/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - userName
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         userName:
 *           type: string
 *           description: The title of your book
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *       example:
 *         id: d5fE_asz
 *         userName: Hadiqa Sumbal Arshad
 *         email: hadiqa.sumbal@invozone.us
 *         password: asfjyur89yflasdha7389r
 *         createdAt: 2020-03-10T04:05:06.157Z
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users mapping API
 * /update:
 *   put:
 *     summary: update username
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: Username Updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: List of all users.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 */

