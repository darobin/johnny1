
var five = require("johnny-five")
,   board = new five.Board({ repl: false });

function HSVtoRGB (hsv) {
    // this doesn't work for the values of 0 and 360
    // here's the hacky fix
    var h = hsv[0];
    if (h === 0) h = 1;
    if (h === 360) h = 359;
    // Rebase the h,s,v values
    h = h/360;
    var s = hsv[1]/100
    ,   v = hsv[2]/100
    ,   h_i = Math.floor(h*6)
    ,   f = h * 6 - h_i
    ,   p = v * (1 - s)
    ,   q = v * (1 - f*s)
    ,   t = v * (1 - (1 - f)*s)
    ,   r = 256
    ,   g = 256
    ,   b = 256
    ;

    switch(h_i) {
        case 0: r = v, g = t, b = p;  break;
        case 1: r = q, g = v, b = p;  break;
        case 2: r = p, g = v, b = t;  break;
        case 3: r = p, g = q, b = v;  break;
        case 4: r = t, g = p, b = v;  break;
        case 5: r = v, g = p, b = q;  break;
    }
    return [Math.floor(r*255), Math.floor(g*255), Math.floor(b*255)];
}

function componentToHex (c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function HSVtoHex (hsv) {
    var rgb = HSVtoRGB(hsv);
    return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
}

board.on("ready", function() {
    var temp = new five.Temperature({
            controller: "TMP36"
        ,   pin: "A0"
        })
    ,   rgb = new five.Led.RGB({
            pins:       [3, 5, 6]
        ,   isAnode:    true
        })
    ,   MIN = 21
    ,   MAX = 28
    ;
    temp.on("change", function() {
        // convert 15-30 to 240-360 (blue-red) in HSV
        var c = this.celsius;
        if (c < MIN) c = MIN;
        if (c > MAX) c = MAX;
        c -= MIN;
        c /= (MAX - MIN);
        c *= 360;
        // c += 240;
        console.log("HUE=" + c);
        var colour = HSVtoHex([c, 100, 100]);
        console.log("colour", colour);
        rgb.color(colour);
    });
});




