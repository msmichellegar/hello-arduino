var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    var lastValue;

    var pin = new five.Pin({
        pin: 'D2',
        mode: five.INPUT
    });

    pin.read(function(err, value) {
        if (value !== lastValue && value === 1) {
            console.log('triggered', Date.now());
        }

        lastValue = value;
    })

    this.repl.inject({ pin });

});
