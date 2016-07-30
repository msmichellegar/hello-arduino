var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

    var heart = [
        "01100110",
        "10011001",
        "10000001",
        "10000001",
        "01000010",
        "00100100",
        "00011000",
        "00000000"
    ];

    var square = [
        "11111111",
        "10000001",
        "10000001",
        "10000001",
        "10000001",
        "10000001",
        "10000001",
        "11111111"
    ];

    var matrix = new five.Led.Matrix({
        pins: {
            data: 2,    // DIN
            clock: 3,   // CLK
            cs: 4       // CS
        }
    });

    matrix.on();

    var msg = "hello".split("");

    // Display each letter for 1 second
    function next() {
        var c;

        if (c = msg.shift()) {
            matrix.draw(c);
            setTimeout(next, 400);
        }
    }

    next();
    matrix.draw(heart);

    this.repl.inject({
        matrix: matrix,
        // Type "heart()" in the REPL to
        // display a heart!
        heart: function() {
            matrix.draw(heart);
        },
        square: function() {
            matrix.draw(square);
        }
    });
});
