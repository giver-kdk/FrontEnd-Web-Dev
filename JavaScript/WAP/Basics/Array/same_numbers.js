// Write a JavaScript program to check a number from three given numbers where two numbers are equal, find the third one

function check(array)
{
	for(let i = 0; i < array.length - 1; i++)
	{
		for(let j = i + 1; j < array.length; j++)
		{
			if(array[i] == array[j])
			{
				if(i == 0 && j == 1) return array[2];
				else if(i == 1 && j == 2) return array[0];
				else if(i == 0 && j == 2) return array[1];
			}
		}
	}
	return "No Equal Numbers found";
}

let array = [1, 2, 2];
console.log(check(array));

array = [1, 3, 2];
console.log(check(array));

array = [1, 3, 1];
console.log(check(array));

array = [2, 3, 3];
console.log(check(array));