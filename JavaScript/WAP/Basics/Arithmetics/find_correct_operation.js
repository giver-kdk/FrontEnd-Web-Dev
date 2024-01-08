// Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression
function find_exp(x, y, z)
{
	let operator;
	if((x + y)  == z) operator = "+";
	else if((x - y) == z) operator = "-";
	else if((x * y) == z) operator = "*";
	else if((x / y) == z) operator = "/";
	else operator = "None";
	return `Correct operator is ${operator}`;
}

console.log(find_exp(10, 2, 20));
console.log(find_exp(10, 2, 8));
console.log(find_exp(10, 2, 12));
console.log(find_exp(1, 2, 20));