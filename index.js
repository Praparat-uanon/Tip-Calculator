const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/index.js", function (req, res) {
  var bill = Number(req.body.bill);
  var percentage = Number(req.body.percentage);
  var tip = (bill * percentage) / 100;

  res.send(`Your tip is ${tip}$.`);
});

app.listen("3000", function () {
  console.log("Server started on port 3000");
});
