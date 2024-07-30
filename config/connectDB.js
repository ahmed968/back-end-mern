// Import the mongoose library for MongoDB interaction
const mongoose = require('mongoose');

/**
 * Establishes a connection to the MongoDB database
 * @async
 * @function connectDB
 * @returns {Promise<void>}
 */
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database using the MONGO_URI environment variable
    await mongoose.connect(process.env.MONGO_URI);
    
    // Log a success message if the connection is established
    console.log('Database is connected');
  } catch (err) {
    // If an error occurs during connection, log the error message
    console.error('Error connecting to database:', err);
  }
};

// Export the connectDB function to be used in other parts of the application
module.exports = connectDB;
