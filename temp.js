
var five = require("johnny-five")
,   board = new five.Board({ debug: false, repl: false })
,   BarCli = require("barcli")
;

board.on("ready", function () {
    var temp = new five.Temperature({
            controller: "TMP36"
        ,   pin:        "A0"
        })
    ,   graph = new BarCli({
            label:  "°C"
        ,   range:  [0, 50]
        })
    ;
    temp.on("change", function () {
        // console.log(this.celsius + "°C");
        graph.update(this.celsius);
    });
});
