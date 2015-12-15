var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var rgb = new five.Led.RGB([6, 5, 3]);
  var index = 0;
  var rainbow = ["FFFFFF", "22CCAA", "4444DD", "442299", "FFFF00", "8F00FF"];

  // , "FEAE2D", "69D025", "22CCAA", "4444DD", "442299"

  this.loop(1000, function() {
    if (index + 1 === rainbow.length) {
      index = 0;
    }
    rgb.color(rainbow[index++]);
  });
});
