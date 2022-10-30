// Write a JavaScript program to check whether all the digits in a given number are the same or not

function same_digit(num)
{
	let numArray = String(num).split("");
	// Get first array element
	let item = numArray[0];
	// Comapare the first element with every elements
	if(numArray.every(elem => elem === item)) 
	{return true;}
	else return false;
}

console.log(same_digit(222));
console.log(same_digit(223));
console.log(same_digit(55555));