var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    var temp = new five.Sensor({
        pin: "A8",
        threshold: 1
    });

    temp.scale(0, 10).on("change", function() {
        console.log(this.value);
    });

});
