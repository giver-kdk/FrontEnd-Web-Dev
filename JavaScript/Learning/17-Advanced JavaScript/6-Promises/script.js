/*
'Promise' is an object with properties: state(pending, fulfilled or rejected) and result(value or error)
It is used to handle asynchronous tasks sequencially
It helps to avoid callback hell
Syntax:
	variable = new Promise(executorFun)
	.then(resultFun)
	.catch(errorFun)
	.finally(endFun)



	function executorFun(resolve, reject)
	{
		resolve(value);
		reject(error);
	}

	Here,
	'executorFun' function has two function arguments: (resolve, reject)
	Based upon the condition, either 'resolve' or 'reject' function is executed
	'resolve' runs and returns it's value if 'executorFunction' succesfully runs
	'reject' runs and returns it's error if 'executorFunction' encounters error

	'.then' is executed when 'resolve' runs
	'.then' takes a function argument that runs when 'resolve' returns value
	That function takes returned value of 'resolve' as its argument  

	'.catch' is executed when 'reject' runs 
	'.catch' takes a function argument that runs when 'reject' returns error
	That function takes returned error of 'reject' as its argument  

	'.finally' is ececuted anyway independently
	It takes no arguments and returns nothing. Its just used for conclusion

*/
let myPromise = new Promise(display)
.then(show)
.catch(warn)
.finally(finish);


function display(myResolve, myReject)
{
	myResolve("Done!");
	myReject("Error!");
}
function show(value)
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