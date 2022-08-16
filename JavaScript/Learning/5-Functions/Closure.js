// Closures in JS means nested child functions that uses outer parent funcitons variable

function outer()
{
	let a = 5;
	// Declaration of nested function
	function inner()						// This function is called 'Closure'
	{
		console.log(`Value of a: ${a}`);
	}
	// Actually calling the nested function
	inner();
}

outer();