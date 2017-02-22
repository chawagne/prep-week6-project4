$(document).ready(function() {

//Question 1
$("#submitBtn").on("click", function() {
    $("<h3>" + $("#textInput").val() + "</h3>").insertAfter("#submitBtn");
});

//Question 2
$(".chex input").click(function () {
    $("h2").toggleClass("hidden");
});

//Question 3
$(".table-striped").append("<tr><td>Jeane</td><td>25</td><td>Content</td></tr>");

//Question 4
$("tbody tr").each(function(){
  if ($(this).children("td:nth-child(3)").text() === "Hangry"){
    $(this).children("td:nth-child(3)").css("color","red");
  }
  else {
    $(this).children("td:nth-child(3)").css("color","green");
  }
//  console.log($(this).children("td:nth-child(3)").text());
});










});
