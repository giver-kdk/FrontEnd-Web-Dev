// Arrow functions helps to write short and neat functions

// Traditional Function
let result = function add()
{
	let a = 2, b = 3;
	return (`Sum of numbers is ${a + b}`);
}

console.log(add());

// Arrow Function 
// Arrow functions don't have name. So, assigned to a variable for using
// Generally 'const' is used for variable arrow function 
const sum = () => 
{
	return (`Sum of numbers is ${(a = 4) + (b = 5)}`);
}
console.log(sum());



// If Arrow Function has single line to return, then 'return' key and brackets can be eliminated 
const addition = () => `Sum of numbers is ${(a = 4) + (b = 5)}`;
console.log(addition());



// Arrow Function with Parameters
const multiply = (a, b) => `Product of numbers is ${a * b}`;
console.log(multiply(4, 5));

