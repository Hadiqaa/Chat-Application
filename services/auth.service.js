const User = require('../models/').User;
const bcrypt = require("bcrypt");
const generateToken = require("../helpers/generatetoken");
console.log("xxx",User);


const loginUser = async (email, password) => {
  try {
   
    const user = await User.findOne({ email });
    const token = generateToken(user.id);
    if (!user) {
      throw new Error('User not found');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Incorrect password');
    }


    return {user, token};
    
  } catch (error) {

    throw error;
  }
};



const registerUser = async (username, email, password) => {
    try {
      // Check if the user already exists with the provided email
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        throw new Error("User already exists");
      }
  
    
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user record
      const newUser = new User({ username, email, password: hashedPassword, });
      await newUser.save();

      return newUser;

    } catch (error) {

      throw error;
    }
  };
  


module.exports = {
    loginUser,
    registerUser
 };
