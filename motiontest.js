var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    var sensor = new five.IR.Motion(7);
    var light = new five.Led(3);

    sensor.on('calibrated', function() {
        console.log('completed calibration: ', Date.now());
    });

    sensor.on('motionstart', function() {
        console.log('detected motion: ', Date.now());
        light.on();
    });

    sensor.on('motionend', function() {
        console.log('motion stopped: ', Date.now());
        light.off();
    });

    this.repl.inject({ sensor });

});
