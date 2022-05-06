const mongoose = require("mongoose");

const Comment = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { collection: "comments" }
);

const comment_model = mongoose.model("Comment", Comment);

module.exports = comment_model;
