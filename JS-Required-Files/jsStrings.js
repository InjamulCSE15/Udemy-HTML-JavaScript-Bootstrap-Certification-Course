// 57. JavaScript Strings:

var studentName1 = "Sajjadul Alam"; // String in double quotes 
var studentName2 = 'Injamul Alam';  // String in single quotes

document.getElementById('strings').innerHTML = "<strong>Students Name: </strong><br>" +
studentName1 + "<br>" + studentName2;

// 58. JavaScript String Length:

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById('strLength').innerHTML = txt.length;

// 59. JavaScript String Length Continue:

var x = "We are the best \"players\" in the country"; 
// If we use double quotes in a string we have to use back slash.
document.getElementById('strContinue').innerHTML = x;
