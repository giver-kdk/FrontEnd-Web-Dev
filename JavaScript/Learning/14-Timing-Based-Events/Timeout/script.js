/*
'setTimeout()' simply executes given function after specified interval of time
Syntax:
	timeoutId = setTimeout(functionName, milliseconds, arg1, arg2,...);

	Here, 'arg1', 'arg2',... are the arguments required for function 'functionName'. It is optional

'clearTimeout()' stops the pending execution of function caused by 'setTimeout'
It takes reference id of 'setTimeout()' whose function execution is to be cancelled
If multiple 'setTimeout()' are used, then all of them have unique reference id
Syntax:
	clearTimeout(timeoutId);
*/


element1 = document.getElementById("btn1");
element2 = document.getElementById("btn2");
element3 = document.getElementById("status");

function printMessage()
{
	alert(`You clicked a button a while ago!`);
	element3.innerHTML = "Execution Completed!";
}


function showMessage()
{
	element3.innerHTML = "Starting Execution...";
	// Simply executes the 'printMessage' after 3000 ms(3 sec)
	timeoutId = setTimeout(printMessage, 3000);
}

function stopMessage()
{
	element3.innerHTML = "Execution Stopped!";
	// 'setTimeout' reference can be accessed globally 
	clearTimeout(timeoutId);			// Stops pending funciton execution by 'setTimeout'
}

// Reaction to 'Start' and 'Stop' button click  
element1.addEventListener("click", showMessage);
element2.addEventListener("click", stopMessage);

