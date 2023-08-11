const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number,
  email: String,
  password: String,
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
