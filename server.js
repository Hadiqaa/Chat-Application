const express = require('express')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
bodyParser = require("body-parser");
const router = require("./routes/index")
const mongoose = require('mongoose');


// Setting up  port
const PORT = process.env.PORT || 3000;


mongoose
  .connect('mongodb://localhost:27017/chatapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Now, start your Express.js server
    const app = express();

    // Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    app.use(express.json()); // to accept JSON data 

    // Define your routes
    app.use(router);

    // Listening to server connection
    app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
  })
  .catch((err) => {
    console.log('Oops, can\'t connect to MongoDB', err);
  });
