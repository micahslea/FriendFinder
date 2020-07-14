var express = require("express");
var path = require("path");
var routes = require("./app/routing/htmlRoutes.js");
var obj = require("./app/routing/apiRoutes.js");

var friends = obj.friends;

//console.log("this");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// console.log(friends[0].name);

var newArr = [];
var newArr2 = [];
var compareArr = [];
function compare() {
  newArr = [];

  for (var j = 0; j < friends[friends.length - 1].scores.length; j++) {
    var user1 = friends[friends.length - 1].scores[j];
    user1 = user1.toString().replace("-", "");

    newArr.push(user1);
  }

  for (var i = 0; i < friends.length; i++) {
    newArr2 = [];
    for (var j = 0; j < friends[i].scores.length; j++) {
      var user2 = friends[i].scores[j];
      user2 = user2.toString().replace("-", "");

      newArr2.push(user2);
    }
    for (var i = 0; i < newArr.length; i++) {
      var compareContainer;
      //   console.log("newArr: " + newArr[i]);
      //   console.log("newArr2: " + newArr2[i]);
      compareContainer = newArr[i] - newArr2[i];
      compareArr.push(compareContainer);
      console.log(compareArr);
    }
  }
}
compare();
//console.log(newArr);
//console.log(newArr2);
