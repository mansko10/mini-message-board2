// Imports
require("dotenv").config();
const express = require("express");
const path = require("node:path");
const router = require("./routers/router");

// Create Express App
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", router);

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw error;
  }

  console.log(`Listening on port ${process.env.PORT}!`);
});
