// db/mongoose.js
const mongoose = require('mongoose');

const mongodbURI = 'mongodb://localhost:27017/chatapp';

mongoose.connect(mongodbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handle connection events and errors
db.on('connected', () => {
  console.log('MongoDB connected');
});

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

module.exports = db;
