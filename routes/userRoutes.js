// Import required modules and dependencies
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authMiddleware = require("../middeleware/authMiddleware");

// Import user controller functions
const {
  register,
  login,
  getUserData,
  getProduct,
  createOrder,
  getUserOrders,
  searchProducts,
  googleAuth
} = require("../controllers/userController");

/**
 * Define user routes
 */

// Route for user registration (POST request)
router.post("/register",
  [
    // Validate email
    check("email", "Email is not valid").isEmail().normalizeEmail(),
    // Validate password strength
    check(
      "password",
      "Your password must be at least 8 characters long, with one number, one symbol, one uppercase, and one lowercase "
    ).isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minSymbols: 1,
      minUppercase: 1,
    }),
  ],
  register
);

// Route for user login (POST request)
router.post("/login", login);

// Route for Google authentication (POST request)
router.post("/google-auth", googleAuth);

// Route to get user data (GET request, protected by authMiddleware)
router.get("/", authMiddleware, getUserData);

// Route to get product(s) (GET request)
router.get("/getproduct", getProduct);

// Route to create an order (POST request, protected by authMiddleware)
router.post("/createorder", authMiddleware, createOrder);

// Route to get user's orders (GET request, protected by authMiddleware)
router.get("/getuserorders", authMiddleware, getUserOrders);

// Route to search for products (GET request)
router.get("/searchproduct", searchProducts);

// Export the router to be used in the main application
module.exports = router;
