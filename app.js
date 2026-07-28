// Imports
require("dotenv").config();
const express = require("express");
const path = require("node:path");
const router = require("./routers/router");

// Create Express App
const app = express();

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to specify "public" folder
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// middleware to parse form data into req.body
app.use(express.urlencoded({ extended: true }));

// Router
app.use("/", router);

// Handle 404
app.use((req, res) => res.status(404).render("404"));

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw error;
  }

  console.log(`Listening on port ${process.env.PORT}!`);
});
