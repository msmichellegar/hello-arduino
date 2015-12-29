var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  console.log("Ready!");

  var rgb = new five.Led.RGB([13, 12, 11]);

  // var blue = new five.Led(13);
  // var orange = new five.Led(12);
  // var red = new five.Led(11);
  // var green = new five.Led(10);

  // blue.strobe(1000);
  // orange.strobe(300);
  // red.strobe(500);
  // blue.strobe(200);

  rgb.color("#ff00ff");

});
