const express = require("express");
const { Mongoose } = require("mongoose");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.URL);

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;