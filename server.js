const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const http = require("http");


dotenv.config();

// JSON config
app.use(express.json());

// Config CORS
app.use(cors());

// Database config
const connectDB = require("./config/connectDB");
connectDB();

// Router config
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/admin", require("./routes/AdminRoutes"));

// Port config
const port = process.env.PORT || 8081;
const server = http.createServer(app);

// Start the main server
server.listen(port, (err) =>
  err ? console.log(err) : console.log("Server is running on port:", port)
);



// Serve the frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../front-end/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/build", "index.html"));
  });
}