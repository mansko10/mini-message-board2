// Imports
require("dotenv").config();
const express = require("express");

// Create Express App
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw error;
  }

  console.log(`Listening on port ${process.env.PORT}!`);
});
