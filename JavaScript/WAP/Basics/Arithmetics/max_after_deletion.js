// Write a JavaScript program to find the maximal number from a given positive integer by deleting exactly one digit of the given number.
function max_del(number)
{
	let strNum = String(number);
	let max = [];
	for(let i = 0; i < strNum.length; i++)
	{
		let num = Number(strNum.slice(0, i) + strNum.slice(i + 1, strNum.length));
		max.push(num);
	}
	max.sort((a, b) => (b - a));
	return max[0];
}

console.log(max_del(1234));
console.log(max_del(150));
console.log(max_del(200));
console.log(max_del(111));
console.log(max_del(123324));