// Write a JavaScript program to replace all the numbers with a specified number of a given array of integers
let array = [1, 2, 3, 4, 3, 3, 5];

function replace_num(array, num, rep)
{
	let result = array.map(elem =>
		{
			if(elem == num)
			{
				return rep;
			}
			else
			{
				return elem;
			}
		});
	return result;
}

// Here, 3 is replaced by 5
console.log(array);
console.log(replace_num(array, 3, 5));

// Here, 2 is replaced by 10
console.log(array);
console.log(replace_num(array, 2, 10));