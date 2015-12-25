var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  console.log("Ready!");

  var one = new five.Led(8);
  var two = new five.Led(2);
  var three = new five.Led(3);
  var four = new five.Led(4);
  var fve = new five.Led(5);
  var six = new five.Led(6);
  var seven = new five.Led(7);

  function displayDigit (number) {
      if (number === 1) {
          displayOne();
      } else if (number === 2) {
          displayTwo();
      } else if (number === 3) {
          displayThree();
      } else if (number === 4) {
          displayFour();
      } else if (number === 5) {
          displayFive();
      } else if (number === 6) {
          displaySix();
      } else if (number === 7) {
          displaySeven();
      } else if (number === 8) {
          displayEight();
      } else if (number === 9) {
          displayNine();
      }
  }

  function reset () {
      one.off();
      two.off();
      three.off();
      four.off();
      fve.off();
      six.off();
      seven.off();
  }

  function displayOne () {
      fve.on();
      seven.on();
  }

  function displayTwo () {
      one.on();
      two.on();
      four.on();
      fve.on();
      six.on();
  }

  function displayThree () {
      one.on();
      two.on();
      three.on();
      four.on();
      six.on();
  }

  function displayFour () {
      two.on();
      three.on();
      six.on();
      seven.on();
  }

  function displayFive () {
      one.on();
      three.on();
      four.on();
      six.on();
      seven.on();
  }

  function displaySix () {
      one.on();
      three.on();
      four.on();
      fve.on();
      six.on();
      seven.on();
  }

  function displaySeven () {
      one.on();
      two.on();
      three.on();
  }

  function displayEight () {
      one.on();
      two.on();
      three.on();
      four.on();
      fve.on();
      six.on();
      seven.on();
  }

  function displayNine () {
      one.on();
      two.on();
      three.on();
      four.on();
      six.on();
      seven.on();
  }

  function cycleDigits () {
      var number = 1;

      setInterval(function() {
          reset();
          displayDigit(number);
          if (number < 9) {
              number = number + 1;
          } else {
              number = 1;
          }

      }, 500);

  }

  cycleDigits();

});
