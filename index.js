const express = require("express");
const { Mongoose } = require("mongoose");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");

mongoose.connect(process.env.URL);
app.use(cors(process.env.CORSURL))

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;