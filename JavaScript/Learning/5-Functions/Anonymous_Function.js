// Anonymous function is a function expression but without a function name
// Other propertiess aresimilar to function expression
/*
syntax:
	variable = function(parameters)
	{
		// statement
	}
*/

let addition = function(a, b)
{
	return (a + b);
}
// Using 'addition' variable to call anonymous function
let answer = addition(2, 3);
console.log(answer);
// Using variable normally
addition = 10;
console.log(addition);
