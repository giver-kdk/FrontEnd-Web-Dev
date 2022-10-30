// Write a JavaScript program to find the smallest round number that is not less than a given value
function small_round(num)
{
	let result = num - num % 10;
	if(result < num)
	{
		result = result + 10;
	}
	return result;
}

console.log(small_round(242));
console.log(small_round(239));
console.log(small_round(5002));