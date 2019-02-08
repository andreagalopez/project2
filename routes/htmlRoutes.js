var db = require("../models");

module.exports = function(app) {

  app.get("/panel", function(req, res){

    res.render("panelcontrol");
  });
  // Load index page
  app.get("/", function(req, res) {
    db.Guest.findAll({}).then(function(dbGuests) {
      res.render("login", {
        guests: dbGuests
      });
    });
  });
  
  app.get("/index", function(req, res){
    res.render("index");
  });

  app.get("/signup", function (req, res) {
    console.log(req.body);
    res.render("signup");
  });

  app.post("/signup", function(req, res) {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
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

  // Load control panel
  app.get("/control_panel", function(req, res) {
    res.render("control_panel");
  });
};
