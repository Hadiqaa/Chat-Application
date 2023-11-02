const AuthService = require("../services/auth.service");
const User = require('../models').User;


console.log("in controllers now", User);
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, token } = await AuthService.loginUser(email, password);
    res.status(200).json({ user, token, status: 200 });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const { user } = await AuthService.registerUser(
      username,
      email,
      password
    );

    res.status(201).json({ user, status: 201 });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




module.exports = {
     login,
    register };
