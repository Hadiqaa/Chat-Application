const User = require("../models/user.model");
const generateToken = require("../config/generatetoken")

const updateUsername = async (req, res) => {
  const userId = req.user.id; 
  const { userName } = req.body; 

  try {
    const updatedUser = await UserService.updateUserProfile(userId, userName);

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

  



  const getUsers = async(req, res) => {
    res.send("hello");
  }
  
  module.exports = {
    updateUsername,
    getUsers,
   
  };