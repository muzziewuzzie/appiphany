const mongoose = require("mongoose");

const Suggestion = new mongoose.Schema(
  {
    suggestion: { type: String, required: true },
  },
  { collection: "suggestions" }
);

const suggestion_model = mongoose.model("Suggestion", Suggestion);

module.exports = suggestion_model;
