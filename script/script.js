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
    $('#workout').attr('readonly', true).val("00 : 00");
    $('#set').attr('readonly', true).val("00 : 00");
    $("#break").attr('readonly', true).val("00 : 00");
});