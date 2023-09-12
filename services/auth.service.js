const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const generateToken = require("../config/generatetoken");

// Function to handle user login
const loginUser = async (email, password) => {
  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User does not exist");
    }

    // Compare the provided password with the stored hashed password
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new Error("Invalid Credentials");
    }

    // Generate a JWT token
    const token = generateToken(user.id);

    // Return the user and token
    return { user, token };
  } catch (error) {
    throw error;
  }
};



const registerUser = async (userName, fullName, email, password) => {
    try {
      // Check if the user already exists with the provided email
      const userExists = await User.findOne({ email });
  
      if (userExists) {
        throw new Error("User already exists");
      }
  
    
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user record
      const newUser = await User.create({
        userName,
        fullName,
        email,
        password: hashedPassword, 
      });
  
      
      const token = generateToken(newUser.id);
  
     
      return { user: newUser, token };
    } catch (error) {
      throw error;
    }
  };
  


module.exports = {
    loginUser,
    registerUser
 };
