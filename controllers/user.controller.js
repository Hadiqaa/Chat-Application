const User = require("../models").User;
const UserService = require ('../services/user.service')

const updateUsername = async (req, res) => {
  try {
    const {user_id, newUsername } = req.body;
    const updatedUser = await UserService.updateName(user_id, newUsername);

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};





    const getUsers = async (req, res) => {
      try {
        const users = await UserService.getAllUsers();
        res.json(users); 
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };
  
  
  module.exports = {
    updateUsername,
    getUsers,
   
  };