$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    var formName = $("#name").val();
    var formAddress = $("#address").val();
    var formAnimal = $("input:radio[name=animal]:checked").val();
    var formColor = $("#color").val();
    $("div.receipt").toggle();
    $("span.name").text(formName);
    $("span.animal").text(formAnimal);
    $("span.address").text(formAddress);
  });
});
