// 66. JavaScript Changing & Deleting:

// Changing:

var fruits = ["Apple", "Orange", "Grape", "Mango", "Banana", "Jack fruit", "Pine-apple"];
fruits[0] = "Kiwi"; // First element will be changed from the array

document.getElementById('changing').innerHTML = fruits.join(", "); 
// Output: Kiwi, Orange, Grape, Mango, Banana, Jack fruit