$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedSpot = $("input#spot").val();
    var inputtedSeason = $("input#season").val();
    var inputtedNotes = $("input#notes").val();
    var newPlace = { spot: inputtedSpot, season: inputtedSeason, notes: inputtedNotes };

    $("ul#places").append("<li><span class='place'>" + newPlace.spot + "</span></li>");

    $("input#spot").val('');
    $("input#season").val("");
    $("input#notes").val("");
debugger;
    $('.place').last().click(function() {
      $('#show-place').show();
      $('#show-place h2').text(newPlace.spot);
      $('.spot').text(newPlace.spot);
      $('.season').text(newPlace.season);
      $('.notes').text(newPlace.notes);
    });
  });
});
