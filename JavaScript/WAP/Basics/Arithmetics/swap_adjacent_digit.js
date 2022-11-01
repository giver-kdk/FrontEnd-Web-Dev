// Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length
function swap(number)
{
	let result = [];
	if(String(number).length % 2 == 0)
	{
		// result.unshift(1);
		let temp1 = number % 10;
		number = Math.floor(number / 10);
		while(number != 0)
		{
			let temp2 = number % 10;
			result.unshift(temp2);
			result.unshift(temp1);
			number = Math.floor(number / 10);
			temp1 = number % 10;
			number = Math.floor(number / 10);
		}
	}
	else
	{
		return "Number length should be even";
	}
	return Number(result.join(""));
}

console.log(swap(1234));
console.log(swap(123456));
console.log(swap(12345));