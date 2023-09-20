const User = require('../models/').User;
const bcrypt = require("bcrypt");
const generateToken = require("../config/generatetoken");
console.log("xxx",User);

const getUserByEmail = async (email) => {
    try {
        let user = await User.findOne({
          where: {
            email: email, // Use the retrieved email in the query
          },
          });
          console.log("just checking", user);
      return user;
    } catch (error) {
      throw error;
    }
  };




// Function to handle user login
const loginUser = async (email, password) => {
  try {
    // Find the user by email
    const user = await getUserByEmail(email);

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
      const user = await getUserByEmail(email);
  
      if (user) {
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
