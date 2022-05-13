const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const User = require("./models/user_model");
const Comment = require("./models/comment_model");
const Suggestion = require("./models/suggestion_model");

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/appiphany", () =>
  console.log("mongodb connected")
);

app.post("/api/register", async (req, res) => {
  try {
    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      leftOffAt: req.body.leftOffAt,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "An account exists with that email" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (user) {
      if (user.password === req.body.password)
        return res.json({
          status: "ok",
          user: true,
          username: user.username,
          email: user.email,
          leftOffAt: user.leftOffAt,
        });
      else
        return res.json({
          status: "error",
          error: "Incorrect Password",
          user: false,
        });
    } else {
      return res.json({
        status: "error",
        error: "Account does not exist",
        user: false,
      });
    }
  } catch (err) {
    res.json({ status: "error", error: "Something went wrong" });
  }
});

app.get("/api/comments", async (req, res) => {
  try {
    const comments = await Comment.find();
    if (comments) {
      return res.json({
        status: "ok",
        datum: comments,
      });
    } else {
      return res.json({
        status: "ok",
        datum: "No comments",
      });
    }
  } catch (err) {
    res.json({ status: "error", error: "Something went wrong" });
  }
});

app.post("/api/comments", async (req, res) => {
  try {
    await Comment.create({
      username: req.body.username,
      email: req.body.email,
      comment: req.body.comment,
    });
    try {
      const comments = await Comment.find();
      return res.json({ status: "ok", datum: comments });
    } catch (err) {
      res.json({ status: "error", error: "Something went wrong" });
    }
  } catch (err) {
    res.json({ status: "error", error: "Something went wrong" });
  }
});

app.post("/api/index", async (req, res) => {
  try {
    await User.findOneAndUpdate(
      {
        email: req.body.email,
      },
      { leftOffAt: req.body.index }
    );
  } catch (err) {
    res.json({ status: "error", error: "Something went wrong" });
  }
});

app.post("/api/suggestion", async (req, res) => {
  try {
    await Suggestion.create({
      suggestion: req.body.suggestion,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Something went wrong" });
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
