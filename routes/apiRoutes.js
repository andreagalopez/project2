var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/user/:id", function(req, res) {
    db.User.findOne({
      where: {
        id = req.params.id
      },
      include: [_Event]
    }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/event", function(req, res) {
    db._Event.create({
      name: req.body.name,
      date: req.body.date,
      time: req.body.time,
      place: req.body.place
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.put("/api/event/:email",function(req,res){
    db.EventGuestList.update(
      {
      confirm: req.body.confirm
      },
     { 
      where:
      {
        guest_email: req.params.email
      }
    }).then(function(dbPost){
      res.json(dbPost);
    });
  });
};


