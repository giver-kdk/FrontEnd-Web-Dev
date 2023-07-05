// We know, variables can be retuned from function
// So, with function expression, indirectly functions can also be returned from another function
// The returned function can be stored in a variable making a function expression
// Now, that variable can be used to call the returned function



// Function returning variable(Hence, returning function)
function transfer()
{
	// Variable quivalent to function
	let hello = function say()
	{
		console.log("Hello...I am a function");
	}
	return hello;
}

// Equivalent to 'let speak = hello;'
let speak = transfer();
speak();				// Equivalet to 'hello()'



// Directly returning function from another function 
function passer()
{
	function print()
	{
		console.log("I am a returned function");
	}
	return print;
}
// Directly returning anonymous function from another function 
function sender()
{
	
	return function()
	{
		console.log("I am another returned function");
	};
}
// Here, 'passer()' returns function name to 'tell' variable
// Which means we made a function expression
let tell = passer();
tell();

// Here, 'sender()' returns function to 'talk' variable
// Which means we made a function expression
let talk = sender();
talk();



function one(n)
{
	console.log("One", n);
}
function two(n)
{
	console.log("Two", n);
}

function num(value)
{
	let number = function findNum()
	{
		switch(value)
		{
			case 1:
				return one(value);
			case 2: 
				return two(value);
			default:
				console.log("Invalid");
		}
	}
	number();
}
num(1);