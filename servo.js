
var five = require("johnny-five")
,   board = new five.Board({ debug: true, repl: false })
;

board.on("ready", function () {
    var rot = new five.Sensor("A0")
    ,   servo = new five.Servo(11)
    ;
    rot.scale(0, 180).on("change", function () {
        servo.to(this.value);
    });
});
