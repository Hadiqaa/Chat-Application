const jwt = require("jsonwebtoken");
const User = require("../models").User;
const asyncHandler = require("express-async-handler"); // Fixed the typo here

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("password"); // Fixed the typo, it should be findById, not findbyId
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token has failed");
    }
  } 

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token"); 
  }
});

module.exports = { protect };
 