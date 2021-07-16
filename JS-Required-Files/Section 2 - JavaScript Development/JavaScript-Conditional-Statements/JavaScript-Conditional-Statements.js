/* 70. JavaScript Conditional Statements:

There are mainly three types of conditional statements in JavaScript.

1.  If statement
2.  If…Else statement
3.  If…Else If…Else statement

*/

var result = 65;

if (result < 50 ) {
    document.write("Your grade is 'F'.");
}
else if (result < 70) {
    document.write("Your grade is 'D'.");
}

else if (result < 80) {
    document.write("Your grade is 'C'.");
}

else if (result < 90) {
    document.write("Your grade is 'B'.");
}

else if (result < 100) {
    document.write("Your grade is 'A'.");
}
else{
    document.write("Result must be less than '100'.");
}

// Output: Your grade is 'D'.