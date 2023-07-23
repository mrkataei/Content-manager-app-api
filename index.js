const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/api/resources", (req, res) => {
  res.send("hello resources!");
});

app.listen(port, () => {
  console.log("server is listening on port:" + port);
});
