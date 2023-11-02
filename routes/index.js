



const express = require("express");
const REACT_APP_API_VERSION = process.env.REACT_APP_API_VERSION || "/api";
const router = express.Router();

// Import route modules
const routes = [
  require("./user.route"),
  require("./auth.route"),
  require("./attachment.route"),
  require("./group.route"),
  require("./message.route"),
  require("./groupmember.route"),
];

// Register routes
routes.forEach((route) => {
  router.use(`${REACT_APP_API_VERSION}`, route);
});


module.exports = router;