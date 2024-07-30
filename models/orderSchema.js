// Import the mongoose library for MongoDB interaction
const mongoose = require("mongoose");

/**
 * Define the schema for the Order model
 * @typedef {Object} OrderSchema
 * @property {Date} createAt - The date when the order was created
 * @property {Array} Products - An array of products in the order
 * @property {mongoose.Schema.Types.ObjectId} owner - Reference to the user who placed the order
 */
const orderSchema = mongoose.Schema({
    createAt: {
        type: Date,
        default: new Date()  // Set the default value to the current date and time
    },
    Products: Array,  // An array to store the products in the order
    owner: {
        type: mongoose.Schema.Types.ObjectId,  // Use ObjectId to reference another document
        ref: "users"  // Reference to the 'users' collection
    }
});

/**
 * Create the Order model using the orderSchema
 * @type {mongoose.Model}
 */
const Order = mongoose.model("order", orderSchema);

// Export the Order model to be used in other parts of the application
module.exports = Order;
