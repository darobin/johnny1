
var five = require("johnny-five")
,   board = new five.Board({ debug: false, repl: false })
// ,   BarCli = require("barcli")
,   exec = require("child_process").exec
,   cur = 0
;

board.on("ready", function () {
    var rot = new five.Sensor("A0")
    // ,   range = [0, 100]
    ,   range = [0, 10]
    // ,   graph = new BarCli({
    //         label:  "Potentiometre"
    //     ,   range:  range
    //     })
    ;
    rot.scale(range).on("change", function () {
        var val = Math.ceil(this.value);
        if (val !== cur) {
            cur = val;
            console.log("Setting volume to ", val);
            exec("osascript -e 'set Volume " + val + "'", function () {
                exec("say 'beep'", function () {});
            });
        }
    });
    // rot.scale(range).on("change", function () {
    //     graph.update(this.value);
    // });
});
