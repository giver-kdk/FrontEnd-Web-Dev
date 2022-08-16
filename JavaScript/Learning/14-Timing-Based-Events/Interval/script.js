/*
'setInterval()' simply executes given function continously on specified interval forever2
Syntax:
	timeoutId = setInterval(functionName, milliseconds, arg1, arg2,...);

	Here, 'arg1', 'arg2',... are the arguments required for function 'functionName'. It is optional

'clearInterval()' stops the further executions of function caused by 'setInterval'
It takes reference id of 'setInterval()' whose function executions is to be cancelled
If multiple 'setInterval()' are used, then all of them have unique reference id
Syntax:
	clearInterval(timeoutId);
*/
element1 = document.getElementById("btn1");
element2 = document.getElementById("btn2");
element3 = document.getElementById("counter");
let count = 0;

function increment()
{
	element3.innerHTML = count;
	count++;
}
function startCounter()
{
	count = 0;			// Reset Counter Value
	// Simply runs 'increment()' every 100ms
	intervalID = setInterval(increment, 100);
	
}
function stopCounter()
{
	// Stops further execution of function ran by serInterval()
	clearInterval(intervalID);
}

element1.addEventListener("click", startCounter);
element2.addEventListener("click", stopCounter);