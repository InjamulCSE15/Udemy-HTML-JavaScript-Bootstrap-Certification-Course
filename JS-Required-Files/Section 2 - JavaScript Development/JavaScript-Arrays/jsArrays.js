// 63. JavaScript Arrays:

var fruits = ["Apple", "Orange", "Grape", "Mango", "Banana", "Jack fruit", "Pine-apple"];
document.getElementById('demo0').innerHTML = fruits[0]; // Output: Apple

document.getElementById('demo1').innerHTML = fruits[1]; // Output: Orange

document.getElementById('length').innerHTML = fruits.length; // Output: 7


// 64. JavaScript Array Attributes:
 
var fruits = ["Apple", "Orange", "Grape", "Mango", "Banana", "Jack fruit", "Pine-apple"];
document.getElementById('arrayAttributes').innerHTML = fruits.toString(); // Output: Apple,Orange,Grape,Mango,Banana,Jack fruit,Pine-apple

// If we separated each string use join() method:

var fruits = ["Apple", "Orange", "Grape", "Mango", "Banana", "Jack fruit", "Pine-apple"];
document.getElementById('join').innerHTML = fruits.join(" * ");
// Output: Apple * Orange * Grape * Mango * Banana * Jack fruit * Pine-apple