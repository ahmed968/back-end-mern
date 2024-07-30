// Import the jsonwebtoken library for JWT operations
const jwt = require("jsonwebtoken");

/**
 * Middleware to check if the user is an admin
 * @async
 * @function adminMiddleware
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Promise<void>}
 */
const adminMiddleware = async (req, res, next) => {
    try {
        // Extract the token from the request headers
        const token = req.headers.token;

        // Check if the token exists
        if (!token) {
            return res.status(401).json({ msg: "You are not authorized" });
        }

        // Verify the token using the JWT_SECRET_KEY
        const verifiedToken = await jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Check if the token is valid
        if (!verifiedToken) {
            return res.status(401).json({ msg: "You are not authorized" });
        }

        // Check if the user role in the token is "admin"
        if(verifiedToken.role == "admin") {
            // If the user is an admin, proceed to the next middleware
            next();
        }
        // Note: There's no else statement here, so non-admin users will also proceed
    } catch (err) {
        // If any error occurs during the process, return a 500 status with an error message
        return res.status(500).json({ msg: "Something went wrong!", err: err.message });
    }
};

// Export the adminMiddleware function to be used in other parts of the application
module.exports = adminMiddleware;
