const express = require("express");

const PORT = 5000;
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
