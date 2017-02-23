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

//Question 5

$(".btn-warning").on("click", function () {
  $("tbody tr").each(function () {
    if ($(this).children("td:nth-child(2)").text() < 10){
         $(this).hide();
    }
   })
})

//Question 6

$(".btn-success").on("click", function () {
  $("tbody tr").each(function () {
    var upper = $(this).children("td:nth-child(1)").text().toUpperCase();
    $(this).children("td:nth-child(1)").text(upper);
   })
})

//Question 7

$(".btn-primary").on("click", function() {
    $(".table-striped").toggle();
});

//Question 8
$("#disableUs input").prop("disabled", true);
$("#disableUs a").removeAttr("href");

//Question 9
$(".dropdown").change(function () {
    $("<h3>" + $(this).find("option:selected").text() + "</h3>").insertAfter(".dropdown");
});


//Question 10
$("#alert10").on("click",function () {
  alert($("#alertList li").length);
  counter();
})

//Question 11
$("<input type='button' class='btn btn-secondary' value='add'/>").insertBefore("#alertList");
$("<input type='button' class='btn btn-danger' value='remove'/>").insertBefore("#alertList");

$(".btn-secondary").on("click", function() {
    $("#alertList").append("<li>I'm new</li>");
    counter();
})

$(".btn-danger").on("click", function() {
    $("#alertList").children("li:last-child").remove();
    counter();
})

//Question 12
function counter() {
    $("#displayList12").text($("#alertList li").length);
}
});
