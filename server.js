// Dependencies
var cheerio = require("cheerio");
var request = require("request");
var express = require("express");
var mongojs = require("mongojs");

// Initialize Express
var app = express();

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "";
var collections = [""];
// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);
// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

// Set the app to listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});