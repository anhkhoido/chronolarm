$("#playButton").on("click", function() {
    alert('start!');
});

$("#stopButton").on("click", function() {
    alert('stop!');
});

$("#pauseButton").on("click", function() {
    alert('pause!');
});

$(function() {
    $("div#chronolarm").find("input").attr("readonly", true).val("00 : 00");
});