// 65. JavaScript Arrays Pop - Push - Shift - Unshift:

// Pop:

var fruits = ["Apple", "Orange", "Grape", "Mango", "Banana", "Jack fruit", "Pine-apple"];
fruits.pop(); // Last element will be removed from the array

document.getElementById('pop').innerHTML = fruits.join(", "); 
// Output: Apple, Orange, Grape, Mango, Banana, Jack fruit


// Shift:

var fruits = ["Apple", "Orange", "Grape", "Mango", "Banana", "Jack fruit", "Pine-apple"];
fruits.shift(); // First element will be removed form the array

document.getElementById('shift').innerHTML = fruits.join(", "); 
// Output: Orange, Grape, Mango, Banana, Jack fruit, Pine-apple