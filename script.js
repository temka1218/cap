var express = require("express");
var mysql = require("mysql");
var bodyparser = require("body-parser");

var app = express();
app.use(bodyparser.json());
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "",
  multipleStatements: true
});

connection.connect(function (error) {
  if (!!error) {
    console.log("error");
  } else {
    console.log("connected");
  }
});
