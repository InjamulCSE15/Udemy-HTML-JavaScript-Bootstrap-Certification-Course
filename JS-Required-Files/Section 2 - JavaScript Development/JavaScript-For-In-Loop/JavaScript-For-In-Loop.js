/* 74. JavaScript For-In Loop:
The JavaScript for in loop loops through the properties of an object.

Example:
*/

var txt = "";
var person = {fname: "Injamul",
    lname: "Alam",
    age: 26
};
var x;

for (x in person) {
    txt += person[x] + " ";
}

document.getElementById('forInLoop').innerHTML = txt;