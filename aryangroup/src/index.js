require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/authRoutes"));
app.use(cookieParser());

// MySQL connection

const router = require("./routes/TestRoutes");
const connectDB = require("./config/db");

// GET all data
app.use("/",router );

app.listen(3000, () => {
  console.log("Server running on port 3000 ");
});