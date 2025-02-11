const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db_config");
require("dotenv").config();

const app = express();

// DB CONNECTION
connectDB();

const PORT = process.env.PORT || 5000;

// User Routes
app.use("/api/user", require("./routes/authRoutes"));

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT : ${PORT}`.bgBlue.black);
});
