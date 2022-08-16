// Function currying is technique used when a function returns a function.
//  We can pre-write arguments for future returning functions by using '()()()...'
// Syntax: curriedFunction(arg1)(arg2)(arg3)...;

function first(a)
{
	// Function Definition 
	function second(b)
	{
		function third(c)
		{
			console.log(`Sum is ${a + b + c}`);
		}

		return third;
	}

	return second;					// Returns 'second()' function without executing it
}
// Function Currying
first(2)(3)(4);
/*
Here, 
	'first()' returns 'second'
	'second()' returns 'third'
	'third()' prints output

	So, 
	first(2)(3)(4) = second(3)(4)
	second(3)(4) = third(4)
	third(4) = output				// 'third()' has '4' and parent data '2' and '3' are accessed from 'Closure'

*/