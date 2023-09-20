const express = require("express");
const AuthController = require("../controllers/auth.controller");
const router = express.Router();
const Auth = require ("../middlewares/authentication.middleware");
const Validate = require ("../validations/user.validation");


router.post("/login", Validate.validateLogin, AuthController.login);
router.post("/register", Validate.validateRegistration, AuthController.register);

module.exports = router;


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - userName
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         userName:
 *           type: string
 *           description: Username of the user
 *         email:
 *           type: string
 *           description: User's email.
 *         password:
 *           type: string
 *           description: User's Password.
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the user was created
 *       example:
 *         id: d5fE_asz
 *         userName: Hadiqa Sumbal Arshad
 *         email: hadiqa.sumbal@invozone.us
 *         password: asfjyur89yflasdha7389r
 *         createdAt: 2020-03-10T04:05:06.157Z
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register as user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userName
 *               - email
 *               - password
 *             properties:
 *               userName:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: At least one number and one letter
 *             example:
 *               userName: fake name
 *               email: fake@example.com
 *               password: password1
 *     responses:
 *       "201":
 *         description: User Registered
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/User'
 *       "400":
 *         description: Invalid email or password
 *         content:
 *           application/json:
 *             example:
 *               code: 401
 *               message: Invalid email or password
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *             example:
 *               email: fake@example.com
 *               password: password1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                   $ref: '#/components/schemas/User'
 *       "401":
 *         description: Invalid email or password
 *         content:
 *           application/json:
 *             example:
 *               code: 401
 *               message: Invalid email or password
 */
