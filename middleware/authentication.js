const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
console.log("in middleware" , User);
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select('-password');

      if (!user) {
        return res.status(401).send('Not authorized, user not found');
      }

      req.user = user;
      next();
    } catch (error) {
      res.status(401).send('Not authorized, token has failed');
    }
  }

  if (!token) {
    res.status(401).send('Not authorized, no token');
  }
};

module.exports = protect;

 