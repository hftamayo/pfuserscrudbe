const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/userModel.js");
const {port, datasource} = require("./config/envvars.js");

//import { port, datasource } from "./config/envvars.js";

const PORT = port || 8005;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(datasource);

app.get("/getusers", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/createuser", (req, res) => {
  UserModel.create(req.body)
  .then(user => res.json(user))
  .catch(err => res.json(err))

})

app.listen(PORT, () => {
  console.log("Server App and Running");
});
