// Import the mongoose library for MongoDB interaction
const mongoose = require("mongoose");

/**
 * Define the schema for the User model
 * @typedef {Object} UserSchema
 * @property {String} name - The name of the user
 * @property {String} email - The email address of the user
 * @property {String} password - The hashed password of the user
 * @property {String} role - The role of the user (either "user" or "admin")
 */
const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true  // Note: 'require' should be 'required' for proper functionality
    },
    email: {
        type: String,
        require: true  // Note: 'require' should be 'required' for proper functionality
    },
    password: {
        type: String,
        require: true  // Note: 'require' should be 'required' for proper functionality
    },
    role: {
        type: String,
        enum: ["user", "admin"],  // The role can only be either "user" or "admin"
        default: "user"  // If no role is specified, it defaults to "user"
    }
});

/**
 * Create the User model using the userSchema
 * @type {mongoose.Model}
 */
const User = mongoose.model("user", userSchema);

// Export the User model to be used in other parts of the application
module.exports = User;
