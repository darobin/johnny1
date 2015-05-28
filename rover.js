
var five = require("johnny-five")
,   board = new five.Board({ debug: false, repl: false })
;

board.on("ready", function () {
    var motors = new five.Motors([
        five.Motor.SHIELD_CONFIGS.POLOLU_DRV8835_SHIELD.M1
    ,   five.Motor.SHIELD_CONFIGS.POLOLU_DRV8835_SHIELD.M2
    ]);
    motors.speed(255);
    this.wait(3000, function () {
        motors.stop();
    });
});
