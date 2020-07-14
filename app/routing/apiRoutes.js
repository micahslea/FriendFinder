// require("../../server.js");

var express = require("express");
var path = require("path");
var app = express();
var obj = require("../data/friends.js");

var friends = obj.friends;
//console.log(friends);
app.get("/api/friends", function (req, res) {
  return res.json(friends);
});

app.post("/api/friends", function (req, res) {
  var newFriend = req.body;
  console.log(newFriend);
  friends.push(newFriend);
  res.json(newFriend);
});

module.exports.friends = friends;
