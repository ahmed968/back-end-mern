// Import the mongoose library for MongoDB interaction
const mongoose = require("mongoose");

/**
 * Define the schema for the Product model
 * @typedef {Object} ProductSchema
 * @property {String} name - The name of the product
 * @property {String} description - A description of the product
 * @property {Number} price - The price of the product
 * @property {String} poster - URL or path to the product's image
 */
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true  // This field must be provided when creating a new product
    },
    description: {
        type: String,
        required: true  // This field must be provided when creating a new product
    },
    price: {
        type: Number,
        required: true  // This field must be provided when creating a new product
    },
    poster: {
        type: String,
        required: true  // This field must be provided when creating a new product
    }
});

/**
 * Create the Product model using the productSchema
 * @type {mongoose.Model}
 */
const Product = mongoose.model("product", productSchema);

// Export the Product model to be used in other parts of the application
module.exports = Product;
