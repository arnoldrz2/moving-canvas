var express = require("express");
var router = express.Router();

// Import the model (user.js) to use its database functions.
var user = require("../models/user.js");

// Create the routes
router.get("/", function(req, res) {
    res.render("index");
});
router.get("/strains", function(req, res) {
    res.render("strains");
});
router.get("/topten", function(req, res) {
    res.render("topten");
});
router.get("/account", function(req, res) {
    res.render("account");
});


module.exports = router;