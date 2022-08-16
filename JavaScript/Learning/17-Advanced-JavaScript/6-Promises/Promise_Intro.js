/*
'Promise' is an object that executes a function that returns either result or error.
It has properties: state(pending, fulfilled or rejected) and result(value or error)
It is used to handle asynchronous tasks sequencially
It helps to avoid callback hell
Syntax:
	variable = new Promise(executorFun)
	.then(resultFun)
	.catch(errorFun)
	.finally(endFun);

	function executorFun(resolve, reject)
	{
		resolve(value);
		reject(error);
	}
	function resultFun(value){...}
	function errorFun(error){...}
	function endFun(){...}



	Here,
	Promise takes a function argument(executorFun) which is immediately executed 
	'executorFun' function has two function arguments(resolve, reject)

	Based upon the code correctness, either 'resolve' or 'reject' function is executed
	'resolve' runs and returns it's value if 'executorFunction' succesfully runs
	'reject' runs and returns it's error if 'executorFunction' encounters error

	'.then' is executed only when 'resolve' runs. Till then it waits
	'.then' takes a function argument(resultFun) that runs when 'resolve' returns value
	That function takes returned value of 'resolve' as its argument  

	'.catch' is executed when 'reject' runs. Till then it waits
	'.catch' takes a function argument(errorFun) that runs when 'reject' returns error
	That function takes returned error of 'reject' as its argument  

	'.finally' is executed whether 'resolve' or 'reject' runs. Till then it waits 
	It takes a function argument(endFun) for conclusion but returns nothing 

	In this way, functions runs in sequencial order

*/
let myPromise = new Promise(execute)
.then(display)
.catch(warn)
.finally(finish);


function execute(myResolve, myReject)
{
	myResolve("Done!");
	myReject("Error!");
}
function display(value)
{
	console.log("Result is: ", value);
}

function warn(error)
{
	console.log("Error is: ", error);
}

function finish()
{
	console.log("Execution is finished!");
}