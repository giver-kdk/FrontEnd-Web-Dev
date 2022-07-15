/*
If 'try' statement is correct syntatically but not logically for programmers, then
we can create our own error and 'throw' to 'catch'

*/

// let errorObject = new Error(message);
let zeroDivide = new Error("Divide by zero error!!!");

function divider(a, b)
{
	try
	{
		if(b == 0)
		{
			throw zeroDivide;
		}
		console.log(`Division is: ${a / b}`);
	}
	catch(error)						// This time, thrown error is catched 
	{
		console.log(error.name);		// Shows type of error: 'ERROR', 'SYNTAX ERROR', 'REFRENCE ERROR'...
		console.log(error.message);		// Shows message written inside Error object
	}
	finally
	{
		console.log("Division work was ended...");
	}
}

divider(6, 3);			// Successful Execution
divider(2, 0);			// Generates Error