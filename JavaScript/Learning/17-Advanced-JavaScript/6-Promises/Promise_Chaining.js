

function square(sum)
{
	console.log(`Sum of two numbers: ${sum}`);
	return (sum * sum);
}
function square_root(square)
{
	console.log(`Square of sum of two numbers: ${square}`);
	return Math.sqrt(square);
}
function result(squareRt)
{
	console.log(`Square Root of square of sum of two numbers: ${squareRt}`);
}
function warning(err)
{
	console.log(`ERROR: ${err}`);
}
function conclude()
{
	console.log(`Addition was completed`);
}
function executor(resolve, reject)
{
	let a = 3, b = 4, sum = 0;
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


let myPromise = new Promise(executor)
// Promise Chaining using '.then'
.then(square)			// Returns square of 'sum' returned by 'resolve'
.then(square_root)		// Returns square root of above square value
.then(result)			// Prints result

.catch(warning)			// Waits until 'myPromise' calls 'reject'
.finally(conclude);		// Waits until 'myPromise' calls either 'resolve' or 'resolve'