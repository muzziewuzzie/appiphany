const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const User = require("./models/user_model");

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

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
