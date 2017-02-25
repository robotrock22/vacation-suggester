$(document).ready(function() {
  $("#inputs").submit(function(event) {

    var name = $("#name").val();
    var partysize = parseInt($("#partysize").val());
    var traveltime = parseInt($("#traveltime").val());
    var budget = parseInt($("#budget").val());
    // console.log("party size is: " + partysize);
    // console.log("days of travel: " + traveltime);
    // console.log("budget: " + budget);

    if (isNaN(partysize) || isNaN(traveltime) || isNaN(budget)) {
        $("#output").text("Please enter a value in all fields.");
      }  else if (partysize + traveltime + budget <= 2009) {
        $("#output").text(name + " pack the bugspray and check out these popular backpacking destinations!")
        $("#backpacker").show();
        $("#backpackerdescript").show();
        $("#airbnb").hide();
        $("#airbnbdescript").hide();
        $("#cruiseship").hide();
        $("#cruisedescript").hide();
      }  else if (partysize + traveltime + budget < 4000 && partysize + traveltime + budget >= 2010) {
        $("#output").text(name + " , looks like you'd enjoy getting out and exploring a new city!");
        $("#backpacker").hide();
        $("#backpackerdescript").hide();
        $("#airbnb").show();
        $("#airbnbdescript").show();
        $("#cruiseship").hide();
        $("#cruisedescript").hide();
      }  else if (partysize + traveltime + budget >= 4001) {
        $("#output").text(name + " , sit back and relax while enjoying a relaxing cruise to a new destination.")
        $("#backpacker").hide();
        $("#backpackerdescript").hide();
        $("#airbnb").hide();
        $("#airbnbdescript").hide()
        $("#cruiseship").show();
        $("#cruisedescript").show();
      }
    event.preventDefault();
   });
  });
