
var five = require("johnny-five")
,   board = new five.Board({ debug: true, repl: false })
,   stacc = 0.1
,   ministacc = stacc / 2
// ,   stacc2 = stacc * 2
;

board.on("ready", function () {
    var piezo = new five.Piezo(9);
    // piezo.frequency(587, 1000);
    piezo.play({
        song: [
            ["F5", 1/4 - stacc]
        ,   [null, stacc]
        ,   ["F5", 1/4 - stacc]
        ,   [null, stacc]
        ,   ["F5", 1/4 - stacc]
        ,   [null, stacc]
        ,   ["D4", 1/4 - stacc]
        ,   [null, stacc]
        ,   ["A5", 1/4 - stacc]
        ,   [null, stacc]
        //
        ,   ["F5", 1/4 - stacc]
        ,   [null, stacc]
        ,   ["D4", 3/8 - stacc]
        ,   [null, ministacc]
        ,   ["A5", 1/8 - stacc]
        ,   [null, stacc + ministacc]
        ,   ["F5", 1/2 - stacc]
        ,   [null, stacc]
        //
        ,   [null, 1]
        ]
    ,   tempo:  30
    });
});
