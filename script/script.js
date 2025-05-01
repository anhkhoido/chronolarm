$("#playButton").on("click", function() {
    alert('start!');
});

$("#stopButton").on("click", function() {
    alert('stop!');
});

$("#pauseButton").on("click", function() {
    alert('pause!');
});

$(function () {
    function updateLength(text) {
        alert(text);
    }
    const actions = {
        incrementLengthWorkout: () => updateLength("Increase length workout"),
        decrementLengthWorkout: () => updateLength('Decrease length workout'),
        incrementLengthSet: () => updateLength('Increase length set'),
        decrementLengthSet: () => updateLength('Decrease length set'),
        incrementLengthBreak: () => updateLength('Increase length break'),
        decrementLengthBreak: () => updateLength('Decrease length break')
    };

    $("button").on("click", function () {
        const id = this.id;
        if (actions[id]) {
            actions[id]();
        }
    });
});

$(function() {
    $("div#chronolarm").find("input").attr("readonly", true).val("00 : 00");
});