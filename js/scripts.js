// $(function(){
//   $("select").children("option:first-child").hide();

$(document).ready(function() {
  $("#inputs").submit(function(event) {
    var name = $("#name").val();
    var partysize = parseInt($("#partysize").val());
    var traveltime = parseInt($("#traveltime").val());
    var budget = parseInt($("#budget").val());
    // console.log("party size is: " + partysize);
    // console.log("days of travel: " + traveltime);
    // console.log("budget: " + budget);

    // Cruise
    if (isNaN(partysize) || isNaN(traveltime) || isNaN(budget)) {
      $("#output").text("Please enter a value in all fields.");
    }  else if (partysize >= 6 && traveltime >= 15 && budget >= 4,001)
        $("#output").text(name + " bring sunscreen, you're going for a cruise!");





    // else if ((partysize + traveltime) <= budget || (partysize + budget) <= traveltime || (traveltime + budget) <= partysize) {
    //   $("#output").text("Congratulations you've created a straight line dummy!");
    //   $("#dummy").show();
    // }  else if (partysize === traveltime && partysize === budget) {
    //   $("#output").text("Congratulations you've created an equilateral triangle!");
    //   $("#dummy").hide();
    // } else if (partysize === traveltime || partysize === budget || traveltime === budget) {
    //   $("#output").text("Congratulations you've created an isosceles triangle!");
    //   $("#dummy").hide();
    // } else if (partysize !== traveltime && partysize !== budget && traveltime !== budget) {
    //   $("#output").text("Congratulations you've created a scalene triangle!");
    //   $("#dummy").hide();
    // }

  event.preventDefault();
  });
});
