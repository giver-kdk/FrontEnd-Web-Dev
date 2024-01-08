// Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3
function replace_hash(str)
{
	let result = [];
	for(let i = 0; i < 10; i++)
	{
		let num = Number(str.replace("#", `${i}`));
		if(num % 3 == 0)
		{
			result.push(num);
		}
	}
	return result;
}
console.log(replace_hash("2#0"));
console.log(replace_hash("3#0"));
console.log(replace_hash("32#0"));