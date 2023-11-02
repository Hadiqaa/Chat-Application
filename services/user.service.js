const User = require('../models/').User;



const updateName = async (user_id, newUsername) => {
  try {
    
    const updatedUser = await User.findOneAndUpdate(
      { id: user_id }, 
      { username: newUsername }, 
      { new: true } 
    );

    if (!updatedUser) {
      throw new Error('User not found');
    }

    return updatedUser;
  } catch (error) {
    throw error;
  }
};





const getAllUsers= async() => {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw error;
    }
  };




module.exports = {
    getAllUsers,
    updateName
}