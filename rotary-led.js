
var five = require("johnny-five")
,   board = new five.Board({ debug: false, repl: false })
;

board.on("ready", function () {
    var rot = new five.Sensor("A0")
    ,   led = new five.Led(11)
    ;
    rot.on("change", function () {
        led.brightness(this.value >> 2);
    });
});
