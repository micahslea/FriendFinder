var express = require("express");
var path = require("path");
var app = express();

// var server = require("../server.js");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});
