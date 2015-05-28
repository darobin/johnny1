
var five = require("johnny-five")
,   board = new five.Board()
,   exec = require("child_process").exec
;

board.on("ready", function () {
    var but = new five.Button(2)
    ,   led = new five.Led(11)
    ;
    but.on("press", function () {
        led.blink();
        exec("fortune -s | say", function () {
            led.stop().off();
        });
    });
});
