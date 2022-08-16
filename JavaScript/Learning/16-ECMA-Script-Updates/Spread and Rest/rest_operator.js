// Rest Operatpr (...) is similar to Spread operator but opposite
// It condenses individual data into single data-pack(array)
// It is used as function parameter

// Using rest operator with array as function parameter(not argument)
// '...array' as parameter condenses all individual arguments into Array
function add(...array1)
{
	let sum = 0;
	for(let i = 0; i < array1.length; i++)					// We can use array features too
	{
		sum = sum + array1[i];
	}
	console.log(`Sum of all numbers is: ${sum}`);
}

add(2, 3);
add(3, 4, 5, 6);

add(3, 4, 5, 6, 7, 8, 9);



// Rest parameter should always be used on Rigth side like a default parameter
// '...array2' as parameter condenses remaining individual arguments into Array
function multiply(a, b, ...array2)
{
	let product = a * b;
	for(let i = 0; i < array2.length; i++)					// We can use array features too
	{
		product = product * array2[i];
	}
	console.log(`Product of all numbers is: ${product}`);
}

multiply(2, 3);				// Only two arguments. So, no data for '...array2'. Hence, 'array2.length' = 0
multiply(3, 4, 5, 6);
multiply(3, 4, 5, 6, 7, 8, 9);





