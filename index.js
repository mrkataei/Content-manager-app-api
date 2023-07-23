const express = require("express");
const app = express();
const port = 3001;

const path = require("path");
const pathToFile = path.resolve("./data.json");

const fs = require("fs");
const getResources = () => JSON.parse(fs.readFileSync(pathToFile));
app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/api/resources", (req, res) => {
  const resources = getResources();
  res.send(resources);
});

app.listen(port, () => {
  console.log("server is listening on port:" + port);
});
