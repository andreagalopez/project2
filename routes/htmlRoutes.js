var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Guest.findAll({}).then(function(dbGuests) {
      res.render("index", {
        guests: dbGuests
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Guest.findOne({ where: { id: req.params.id } }).then(function(dbGuests) {
      res.render("example", {
        example: dbGuests
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
