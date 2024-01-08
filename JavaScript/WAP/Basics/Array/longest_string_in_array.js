// Write a JavaScript to find the longest string from a given array of strings
let array = ['a', 'aa', 'aaa', 'aaaaa','aaaa'];

function longest(array)
{
	let long = array.reduce((acc, ind) =>
	{
		if(acc.length < ind.length)
		{
			acc = ind;
		}
		return acc;
	});
	return long;
}

console.log(longest(array));