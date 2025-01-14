require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./utils/db");

const mentorRoutes = require("./routes/mentor");
const studentRoutes = require("./routes/student");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database connection
connectDB();

// Routes
app.use("/api/mentors", mentorRoutes);
app.use("/api/students", studentRoutes);

// Start server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
