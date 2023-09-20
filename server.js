const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const {Client} = require('pg')
bodyParser = require("body-parser"),
swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");
const router = require("./routes/index")

// Swagger configuration
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);


// Setting up  port
const PORT = process.env.PORT || 3000;

const Connection = new Client({
  host: 'localhost',
  user: 'hadiqasumbalarshad',
  password: '11223344',
  port: '5432',
  database: 'chatapp', 
});

Connection.connect()
  .then(() => {
    console.log('Connected to database');
    
    // Now, start your Express.js server
    const app = express();

    // Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());


    app.use(express.json()); //to acccept JSON data 

    // Define your routes
    app.use(router);
    // Serve Swagger UI at /api-docs
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

    // app.use(indexRouter);

    // Listening to server connection
    app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
  })
  .catch((err) => {
    console.log('Oops, can\'t connect', err);
  });
