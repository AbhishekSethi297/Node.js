const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 8080;
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/project.html");
});

app.post("/", function (req, res) {
  var years = Number(req.body.age) / 15;
  res.send("age in dog years is:" + years + "years.");
});

app.listen(port);
