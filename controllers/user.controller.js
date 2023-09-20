const User = require("../models").User;
const generateToken = require("../config/generatetoken")
const UserService = require ('../services/user.service')

const updateUsername = async (req, res) => {
  try {
    const { id } = req.body;
    const { newUsername } = req.body;
    const updatedUser = await UserService.updateName(id, newUsername);

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};





    const getUsers = async (req, res) => {
      try {
        const users = await UserService.getAllUsers();
        res.json(users); // Send the users as JSON response
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };
  
  
  module.exports = {
    updateUsername,
    getUsers,
   
  };