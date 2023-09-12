const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const {Client} = require('pg')
const router = require("./routes/user.route");
// Setting up your port
const PORT = process.env.PORT || 3000;

const Connection = new Client({
  host: 'localhost',
  user: 'hadiqasumbalarshad',
  password: '11223344',
  port: '5432',
  database: 'chatapp', // Replace with your actual database name
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

    // Define your routes
    app.use(router);

    // Listening to server connection
    app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
  })
  .catch((err) => {
    console.log('Oops, can\'t connect', err);
  });
