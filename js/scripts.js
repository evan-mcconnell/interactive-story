//buisness logic
var username = "";
var trait1 = ""
//UI logic
$(document).ready(function() {
  $("#start-form").submit( function(event) {
    event.preventDefault();
    username = $("#username").val();
    trait1 = $("#alignment").val();

    //directs to chapter 1
    username && trait1 ? document.location.href="chapter1.html" : alert("Did you enter a name and thing?");
  });
});
