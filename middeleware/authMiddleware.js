// Import the jsonwebtoken library for JWT operations
const jwt = require("jsonwebtoken");

/**
 * Middleware to authenticate user requests
 * @async
 * @function authMiddleware
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Promise<void>}
 */
const authMiddleware = async (req, res, next) => {
    try {
        // Extract the token from the request headers
        const token = req.headers.token;

        // Check if the token exists
        if (!token) {
            // If no token is provided, return an unauthorized status
            return res.status(401).json({ msg: "You are not authorized" });
        }
        else {
            // Verify the token using the JWT_SECRET_KEY
            const verifiedToken = await jwt.verify(token, process.env.JWT_SECRET_KEY);

            // Check if the token is valid
            if (!verifiedToken) {
                // If the token is invalid, return an unauthorized status
                return res.status(401).json({ msg: "You are not authorized" });
            }
            else {
                // If the token is valid, add the user ID from the token to the request body
                req.body.userId = verifiedToken.id;  
                // Proceed to the next middleware
                next();
            }
        }
    } 
    catch (err) {
        // If any error occurs during the process, return a 500 status with an error message
        return res.status(500).json({ msg: "Something went wrong with authMiddleware!", err: err.message });
    }
};

// Export the authMiddleware function to be used in other parts of the application
module.exports = authMiddleware;
