// Get references to page elements
var $submitBtn = $("#submitBtn");
var $name = $("#enter-name");
var $date = $("#enter-date");
var $time = $("#enter-time");
var $place = $("#enter-place");
var $guest = $("#enter-guest");

$("#submitBtn").on("click", addEvent);
$("#enter-guest").on("click", addUser);


function addEvent (){

  var newEvent = {
    name: $name.val().trim(),
    date: $date.val().trim(),
    time: $time.val().trim(),
    place: $place.val().trim(),
    UserId: a // Login - User
  }
$.ajax({
  type: "POST",
  url: "/api/event/",
  data: newEvent
});
}

function addUser (){

var newUser = {
    
}
  
$.ajax({
  type: "POST",
  url: "/api/user-event/",
  data: 
});
}

function getEvents(){

  var id = ""; // Login - UserId

  $.get("/api/user/" + id, function(data) {

    if (data){
      // Poner la info donde tenga que ir 
    }
    else{   
      // Mandar mensaje de error - para que el usuario sepa que no se encontro informacion
    }
  });
}


function confirmEvent (){

  var guest_email = ""; // Login - Email

  $.ajax({
    type: "PUT",
    url: "api/event/" + guest_email,
    data:{
      confirm : true
    }
  }).then(function() {
    window.location.href = "/";
  });
  
}


