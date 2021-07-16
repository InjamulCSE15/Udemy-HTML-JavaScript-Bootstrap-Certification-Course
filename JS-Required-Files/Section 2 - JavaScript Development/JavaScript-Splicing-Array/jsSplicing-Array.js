// 67. JavaScript Splicing an Array:

/* 
splice():
splice() method to delete existing elements, insert new elements, and replace elements in an array 
*/

var fruits = ["Apple", "Orange", "Mango", "Pear"];
fruits.splice(2, 0, "Lemon", "Banana");

/*
 The value 2 indicates that we want the new elements to start with an index number of 2 
 the 0 indicates 
 */
document.getElementById('splice').innerHTML = fruits.join(", ");
// Output: Apple, Orange, Lemon, Banana, Mango, Pear