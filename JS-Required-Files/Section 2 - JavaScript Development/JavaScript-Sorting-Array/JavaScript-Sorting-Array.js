// 68. JavaScript Sorting an Array:

/* 
sort():
The sort() method sorts the elements of a given array in a specific ascending or descending order.
*/

var cars = ["Volvo", "Ford", "Toyota", "Lexus"];
cars.sort();

document.getElementById('sorting').innerHTML = cars;
/* Output: Ford,Lexus,Toyota,Volvo
Alphabetically A to Z sorted the array elements.
*/

// Reverse():
var cars = ["Volvo", "Ford", "Toyota", "Lexus", "BMW", "Viper"];
cars.reverse();

document.getElementById('reversed').innerHTML = cars;
/* Output: Viper,BMW,Lexus,Toyota,Ford,Volvo
Reversed all of the elements from the array
*/