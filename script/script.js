function start_workout() {
    alert('start!');
}

function pause_workout() {
    alert('pause');
}

function reset_workout() {
    alert('reset');
}

$(function() {
    $("div#chronolarm").find("input").attr("readonly", true).val("00 : 00");
});