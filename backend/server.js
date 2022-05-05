const express = require("express");
const app = express();

const PORT = 1337;

app.get("/hello", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
