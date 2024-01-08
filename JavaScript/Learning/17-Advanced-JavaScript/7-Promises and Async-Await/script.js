/*
async-await can be used to simplify the syntax of using Promise
'async' makes any function asynchronous and make it to always return a 'Promise' 
Syntax:
	async function functionName()
	{
		// Statement
	}
'await' can be used only inside 'async function'
'await' makes entire 'async function' wait until Promise is settled(resolve or reject)
'await' doesn't affect the script outside the 'async function'. So, they don't wait
Syntax:
	let variable = await promiseName;

*/

// Executor function definition
function executor(resolve, reject)
{
	let a = 2, b = 3, sum = 0;
	// Asynchronous Function
	setTimeout(() => {
		sum = a + b;
		if(sum > 0)
		{
			resolve(sum);
		}
		else
		{
			reject("Both numbers are zero");
		}
	}, 2000);
}
// Promise with async-await
// Simply use variable to store pending result(resolve)
// Use normal, try-catch-finally for error handling(reject)
// Finally, wrap all these inside an 'async function'
async function myFunction()
{
	try
	{
		let myPromise = new Promise(executor);
		let sum = await myPromise;					// Value returned to 'result' if got 'resolve' 
		console.log(`Sum is: ${sum}`);
	}
	catch(err)							// Error returned to 'catch' by 'await myPromise' if got 'reject'
	{console.log(err);}
	finally
	{console.log("Calculation Ended!");}
	console.log("This is end of async function...I am affected by 'await' lol");
}
myFunction();

console.log("This is outside async function...I am not affected by 'await' haha");