// 65. JavaScript Arrays Pop - Push - Shift - Unshift:

// Pop():

var fruits = ["Apple", "Orange", "Grape", "Mango", "Banana", "Jack fruit", "Pine-apple"];
fruits.pop(); // Last element will be removed from the array

document.getElementById('pop').innerHTML = fruits.join(", "); 
// Output: Apple, Orange, Grape, Mango, Banana, Jack fruit


// Shift():

var fruits = ["Apple", "Orange", "Grape", "Mango", "Banana", "Jack fruit", "Pine-apple"];
fruits.shift(); // First element will be removed form the array

document.getElementById('shift').innerHTML = fruits.join(", "); 
// Output: Orange, Grape, Mango, Banana, Jack fruit, Pine-apple

// Push():

var fruits = ["Apple", "Orange", "Grape", "Mango", "Banana", "Jack fruit", "Pine-apple"];
fruits.push("Cherry"); // Add a new element will be the last position of the array

document.getElementById('push').innerHTML = fruits.join(", "); 
// Output: Orange, Grape, Mango, Banana, Jack fruit, Pine-apple, Cherry

// Unshift():

var fruits = ["Apple", "Orange", "Grape", "Mango", "Banana", "Jack fruit", "Pine-apple"];
fruits.push("Tomato"); // Add a new element will be the first position of the array

document.getElementById('unshift').innerHTML = fruits.join(", "); 
// Output: Orange, Grape, Mango, Banana, Jack fruit, Pine-apple, Cherry