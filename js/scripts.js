//buisness logic

//UI logic
$(document).ready(function() {
  $("#enter-btn").submit( function(event) {
    event.preventDefault();
    console.log("hi")
    window.location.href="./chapter1.html";
  });
});
