var express = require("express");
var router = express.Router();

// Import the model (user.js) to use its database functions.
var user = require("../models/user.js");

// Create the routes
router.get("/", function(req, res) {
    res.render("index"); //splash page
});
router.get("/search", function(req, res) {
    res.render("search"); //search page
});
router.get("/artistaccountsetup", function(req, res) {
    res.render("artaccset"); //artist account setup page
});
router.get("/artistprofile", function(req, res) {
    res.render("artprof"); //artist profile page
});
router.get("/useraccountsetup", function(req, res) {
    res.render("useraccset"); //user account sestup page
});
router.get("/userprofile", function(req, res) {
    res.render("userprof"); //user profile page
});

module.exports = router;