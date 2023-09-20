// const express = require('express');
// const authRoute = require('./auth.route');
// const userRoute = require('./user.route');



// const router = express.Router();

// const defaultRoutes = [
// 	{
// 		path: '/auth',
// 		route: authRoute,
// 	},
// 	{
// 		path: '/users',
// 		route: userRoute,
// 	},
// ];


// defaultRoutes.forEach((route) => {
// 	router.use(route.path, route.route);
// });

// module.exports = router;



const express = require("express");
const REACT_APP_API_VERSION = process.env.REACT_APP_API_VERSION || "/api/v1";
const router = express.Router();

// Import route modules
const routes = [
  require("./user.route"),
  require("./auth.route"),
];

// Register routes
routes.forEach((route) => {
  router.use(`${REACT_APP_API_VERSION}`, route);
});

// router.get("/", (req, res) => {
//   // #swagger.ignore = true
//   res.writeHead(200, { "content-type": "text/html" });
//   res.end(`<h1 style="text-align:center">Welcome to InvoCom ChatBot</h1>`);
// });

module.exports = router;