
var five = require("johnny-five")
,   board = new five.Board()
// ,   ledState = false
;

// function toggled (led) {
//     return function () {
//         led[ledState ? "off" : "on"]();
//         ledState = !ledState;
//     };
// }

board.on("ready", function () {
    var led = new five.Led(11);
    // setInterval(toggled(led), 200);
    led.pulse();
});
