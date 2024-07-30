// Import required modules and dependencies
const express = require("express");
const router = express.Router();
const adminMiddleware = require("../middeleware/adminMiddleware");

// Import admin controller functions
const {
    addProduct,
    updateProduct,
    deleteProduct,
    getOrders
} = require("../controllers/adminController");

/**
 * Define admin routes
 * All routes (except getOrders) are protected by adminMiddleware
 */

// Route to add a new product (POST request)
router.post("/addProduct", adminMiddleware, addProduct);

// Route to update an existing product (PUT request)
router.put("/updateproduct/:id", adminMiddleware, updateProduct);

// Route to delete a product (DELETE request)
router.delete("/deleteproduct/:id", adminMiddleware, deleteProduct);

// Route to get all orders (GET request)
// Note: This route is not protected by adminMiddleware
router.get("/getorders", getOrders);

// Export the router to be used in the main application
module.exports = router;
