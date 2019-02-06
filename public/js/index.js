// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");



function addEvent (){

  var newEvent = {
    name: $name.val().trim(),
    date: $date.val().trim(),
    time: $time.val().trim(),
    place: $place.val().trim()
  }
$.ajax({
  type: "POST",
  url: "/api/event",
  data: newEvent
});
}

function getEvents(){

  var id = "";

  $.ajax({
    type:"GET",
    url: "/api/user/" + id
  })
}


function confirmEvent (){

  var guest_email = "";

  $.ajax({
    type: "PUT",
    url: "api/event",
    data: true
  }).then(function() {
    window.location.href = "/";
  });
  
}


