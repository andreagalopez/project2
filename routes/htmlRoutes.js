var db = require("../models");

module.exports = function(app) {

  app.get("/panel", function(req, res){

    res.render("panelcontrol");
  });
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
/*     db.User.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    }); */
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

  /*Login get function */
  app.get("/", function (req, res) {
    console.log(req.body);
    db.User.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });




  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};



//Bring express into the file.
const express = require('express');
//Ask express to provide us with a new
//instance of it's router module.
const router = express.Router();
const isAuthenticated = require('../middlewares/isAuthenticated');
//A simple GET route
router.get('/', isAuthenticated, function(req, res) {
  //Using the handlebars view engine
  //we tell it to render the
  //welcome.hbs view, and give it
  //an object containing a key called
  //username with the value
  //'Your nice name' so that the view can
  //use it.
  res.render('welcome.hbs', {
    username: req.user.firstName
  });
});

//Prepare the file to output our router.
module.exports = router;

