var express = require("express");
var router = express.Router();

// Import the model (user.js) to use its database functions.
var user = require("../models/user.js");

// Create the routes
router.get("/", function(req, res) {
    res.render("slash"); //splash page
});
router.get("/browse", function(req, res) {
    res.render("browse"); //browse page
});
router.get("/artistprofilesetup", function(req, res) {
    res.render("artprofset"); //artist profile setup page
});
router.get("/artistprofile", function(req, res) {
    res.render("artprof"); //artist profile page
});
router.get("/userprofilesetup", function(req, res) {
    res.render("userprofset"); //user account setup page
});
router.get("/userprofile", function(req, res) {
    res.render("userprof"); //user account page
});

module.exports = router;