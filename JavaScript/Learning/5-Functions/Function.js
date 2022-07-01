/*
Syntax for function definition is:
	function function_name(parameters)
	{
		//statement
	}
*/

// Function Definition
// No need to use 'let', 'var' or 'const' in function parameter
function sum(a, b)					// Here, 'a' and 'b' are parameters
{
	result = a + b;
	console.log(result);
}

// Function Calling
let x = 20, y = 30;
sum(x, y);							// Here, 'x' and 'y' are arguments


// Function Returning a variable
function multiply(m, n)
{
	return (m * n);
}
let product =  multiply(4, 5);
console.log(product)


