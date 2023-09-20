const User = require('../models/').User;



const getUserById = async (id) => {
	return User.findByPk(id);
};


const updateName = async (userId, newUsername) => {

    try {
        // Find the user by their ID
        const user = await getUserById(userId);
    
        if (!user) {
          throw new Error('User not found'); 
        }
    
        // Update the username
        user.userName = newUsername;
        await user.save();
    
        return user;
      } catch (error) {
        throw error;
      }

};





const getAllUsers= async() => {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw error;
    }
  };




module.exports = {
    getAllUsers,
    updateName
}