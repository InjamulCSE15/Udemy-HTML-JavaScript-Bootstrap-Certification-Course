// 69. JavaScript Joining Arrays:

//concat() :

var Girls = ["Shithi", "Nasrin", "Sultana", "Farhana", "Samia"];

var Boys = ["Jahed", "Sajjad", "Rahim", "Rafat", "Injamul"];

var Combined = Girls.concat(Boys); 

/*
'Combined' variable will store the element values of both arrays using the concat() method.
*/ 

document.getElementById('concat').innerHTML = Combined;
// Output: Shithi,Nasrin,Sultana,Farhana,Samia,Jahed,Sajjad,Rahim,Rafat,Injamul