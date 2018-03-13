// Dependencies 
var express = require('express')
var methodOverride = require('method-override')
var bodyParser = require('body-parser')
var path = require('path');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json and text
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(methodOverride("_method"));

// Router
// require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './router/htmlRoutes'))(app);

// Import routes and give the server access to them.
// var routes = require("./controllers/mcrouter.js");

// app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
