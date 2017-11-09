var t = 72;
var s = 2;

var power = Math.pow(s,0.16);
var product1 = .6215 * t;
var product2 = 35.75 * power;
var product3 =.4275 * t * power;
var result = Math.round(35.74 + product1 - product2 + product3);


document.getElementById("windchill").innerHTML = " " + result;
