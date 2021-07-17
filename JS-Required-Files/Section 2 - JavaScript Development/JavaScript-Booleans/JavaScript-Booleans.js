// 72. JavaScript Booleans:

/* Boolean() :
The Boolean() function can be used to find out if an expression or variable is true as a general rule. This includes both numerical and string data. Anything without a real value is false.
*/

// Example:

var b1 = Boolean(80);
var b2 = Boolean(2.86);
var b3 = Boolean(-10);
var b4 = Boolean("Hi");
var b5 = Boolean('false');
var b6 = Boolean(1 + 8 + 10.14);
var b7 = Boolean(0);

document.getElementById('boolean').innerHTML =
"80 is " + b1 + "<br>" + 
"2.86 is " + b2 + "<br>" +
"-10 is " + b3 + "<br>" +
"Any (not empty) string is " + b4 + "<br>" +
"The string 'false' is " + b5 + "<br>" +
"Any expression (except zero) is " + b6 + "<br>" +
"Zero is " + b7 + "<br>" ;
