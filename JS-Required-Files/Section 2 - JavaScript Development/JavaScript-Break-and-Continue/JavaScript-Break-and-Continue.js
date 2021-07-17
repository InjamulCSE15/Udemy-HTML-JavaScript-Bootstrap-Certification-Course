/* 77. JavaScript Break and Continue:
We can use a javascript break and continue statements to either exit a loop or skipping iteration of a loop.

Let's start with the break statement in this example.

*/

// Break:
var i;
var result = " ";
for (i = 0; i < 10; i++) {
    if(i === 3) {
        break;
    }
    result += i + "<br>";
}
document.getElementById('Break').innerHTML = result;
/* Output:
This is Break code output:
0
1
2
*/

// Continue:
var j;
var output  = " ";
for (j = 0; j < 10; j++) {
    if(j === 3) {
        continue;
    }
    output += j + "<br>";
}
document.getElementById('Continue').innerHTML = output;
/*
Output:
This is Continue code output:
0
1
2
4
5
6
7
8
9
*/