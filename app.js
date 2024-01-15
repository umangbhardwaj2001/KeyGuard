const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); //css
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Connect to MongoDB
mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => console.log("CONNECTED"));

// Routes
app.use("/", require("./routes/index"));
app.use("/search", require("./routes/search"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
