// findIndex() is similar to find() method but it returns index of 1st element that passes the test
// Otherwise, it returns -1
let numbers = [5, 6, 7, 8, 9];
function test(element, index, array)
{
	if(element > 6)
	{
		// return element;			// Anyhow original 'index' is returned
		index = index + 2;			// This doesn't affect the returning index
		return index;
	}
}

let index1 = numbers.findIndex(test);
if(index1 != -1)
{
	console.log(index1);
}
else
{
	console.log("No element passed the test. So, no index detected");
}


