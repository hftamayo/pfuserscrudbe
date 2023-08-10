const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.listen(8004, () => {
  console.log("Server App and Running");
});
