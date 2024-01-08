// Function passed to another function as a argument is a callback function
// Function taking 'callback' function as parameter is Higher Order function

/*
Core principle is calling/using a function from another function to adjust sequencial function execution sequence

Asynchronous functions let other functions execute when they are on hold.
Due to which other function to be executed later, executes first
So, Nesting that function with asynchronous function will make it execute with(or later) asynchronous function. 

*/

// Without using 'callback' (function inside function)
console.log("Wrong Sequence:\n");
function started(){console.log(`Addition started!`);}
function ended(){console.log(`Addition ended!`);}

function first_adder()
{
	let sum = 3 + 4;
	console.log(`Sum is: ${sum}`);
}
// The order in the output is broken
started();
setTimeout(first_adder, 2000);
ended();



// Using 'callback' (function inside function)
function second_adder(begin, stop)
{
	console.log("\nRight Sequence:\n");
	begin();								// 'begin()' is 'callback' function 
	let sum = 10 + 5;
	console.log(`Sum is: ${sum}`);
	stop();
}
setTimeout(second_adder, 2000, started, ended);




