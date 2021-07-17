/* 78.JavaScript Functions:

=> Intro:
A function is a block of code that performs a specific task.

There are mainly two advantages of JavaScript functions.
1.  Code reusability: We can call a function several times so it save coding.
2.  Less coding: It makes our program compact. We don’t need to write many lines of
                 code each time to perform a common task.

=> Declaring a Function:
The syntax to declare a function is:

function nameOfFunction () {
    // function body   
}

=> Function with Arguments or Parameters:
You can create functions with arguments as well. Arguments should be specified within parenthesis

Syntax:

function nameOfFunction(argument1, argument2)

{

  lines of code to be executed;

}

*/

function myFunction(a, b) {
    return a * b;
}

document.getElementById('function').innerHTML = myFunction(3, 5);
// Output: 12