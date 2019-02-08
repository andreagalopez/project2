var db = require("../models");

module.exports = function(app) {

  // Load index page
  app.get("/", function (req, res) {
    console.log(req.body);
    db.User.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
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

  /*Get events into the main panel */
  app.get('/panel', function(req, res) {
    db.Events.findAll({
      where: {UserId: 2}
    }).then(function(dbEvents) {
      console.log(dbEvents);
      res.render("panelcontrol", {
        invitedEvents: dbEvents
      });
    })
  });
};