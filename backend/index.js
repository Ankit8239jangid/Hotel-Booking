// Requirements
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const databaseConnection = require("./src/models/connection/database");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

dotenv.config();

// Cloudinary
const cloudinary = require("cloudinary");

// Logger
const logger = require("./src/utils/info_logger");
const e_logger = require("./src/utils/error_logger");

// Cloudinary Configuration
try {
    logger.info("Cloudinary initialized");
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });
} catch (err) {
    e_logger(err);
}

// PORT
const PORT = process.env.PORT || 7000;

// Import Routes
const logoutRoutes = require("./src/routes/logout");
const userRoutes = require("./src/routes/users");
const authRoutes = require("./src/routes/auth");
const myHotelRoutes = require("./src/routes/my-hotels");
const hotelRoutes = require("./src/routes/hotels");
const viewRoutes = require("./src/routes/views");

// Database Connection
databaseConnection();

// Express App Configuration
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Fixing CORS Issue
app.use(
    cors({
        origin: process.env.FRONTEND_URL?.replace(/\/$/, ""), // Remove trailing slash if exists
        credentials: true, // Allow cookies & credentials
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/logout", logoutRoutes);
app.use("/my-hotels", myHotelRoutes);
app.use("/hotels", hotelRoutes);
app.use("/", viewRoutes);

// ✅ Fixed Token Check Endpoint
app.post("/check", (req, res) => {
    const { auth_token } = req.cookies;

    if (!auth_token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        // Verify Token
        const decoded = jwt.verify(auth_token, process.env.JWT_SECRET_KEY);
        return res.status(200).json({ valid: true, user: decoded });
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
});

// Start Server
app.listen(PORT, () => {
    logger.info(`✅ Server is running on port ${PORT}`);
});
