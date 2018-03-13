// Path Dependency
var path = require('path');

// HTML routes
module.exports = function(app) {
  // Splash Page
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/tattooproject0.html'));
  });
  // Artist Profile Setup Page
  app.get('/tattooartistform', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/tattooartistformA.html'));
  });
};