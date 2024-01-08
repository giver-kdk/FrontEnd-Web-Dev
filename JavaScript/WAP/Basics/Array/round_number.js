// Write a JavaScript program to find the position of a rightmost round number in an array of integers. Returns 0 if there are no round number

let array = [1, 2, 3, 4, 10, 5, 6, 20, 7];

function right_round(array)
{
	for(let i = array.length - 1; i >= 0; i--)
	{
		if(is_round(array[i]))
		{
			return array[i];
		}
	}
	return 0;
}
function is_round(num)
{
	if(num % 10 == 0) return true;
	else return false;
}

console.log(right_round(array));

array = [1, 2, 3, 4, 10, 5, 6];
console.log(right_round(array));