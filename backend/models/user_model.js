const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    leftOffAt: { type: Number },
  },
  { collection: "users" }
);

const user_model = mongoose.model("User", User);

module.exports = user_model;
