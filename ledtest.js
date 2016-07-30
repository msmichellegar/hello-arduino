var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    var red = new five.Led(13);
    var yellow = new five.Led(11);
    var green = new five.Led(9);

    red.strobe(100);
    yellow.strobe(300);
    green.strobe(200);

});
