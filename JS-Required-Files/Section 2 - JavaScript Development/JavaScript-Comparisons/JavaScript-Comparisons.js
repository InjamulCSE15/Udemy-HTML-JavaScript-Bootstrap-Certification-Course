// 71. JavaScript Comparisons:

/*

Operators:	
Description:
Examples:

1.  ==	 Equal to: true if the operands are equal	              5==5; //true
2.  !=	 Not equal to: true if the operands are not equal	      5!=5; //false
3.  ===	 Strict equal to: true if the operands are equal and of the same type	5==='5'; //false
4.  !==	 Strict not equal to: true if the operands are equal but of different type or not equal at all	5!=='5'; //true
5.  >	 Greater than: true if the left operand is greater than the right operand	3>2; //true
6.  >=	 Greater than or equal to: true if the left operand is greater than or equal to the right operand	3>=3; //true
7.  <	 Less than: true if the left operand is less than the right operand	            3<2; //false
8.  <=	 Less than or equal to: true if the left operand is less than or equal to the right operand	        2<=2; //true

*/

// Equal To ( == ) Operator:
var x = 5;
document.getElementById('equalTo').innerHTML = (x == 5);
// Output: true

// Not equal To ( != ) Operator: 
var x = 5;
document.getElementById('notEqualTo').innerHTML = (x != 5);
// Output: false

// Strict equal to ( === ) Operator:
var x = 5;
document.getElementById('strictEqualTo').innerHTML = (x === '5');
// Output: false