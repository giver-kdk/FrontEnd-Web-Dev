// for-of-loop is used to loop through iterable data like array, string, maps, nodelist, etc
// Generally, used in case of array
// We can't loop through objects using for-of-loop
let array = [5, 6, 7, 8, 9];
let myName = "Giver"; 
/*
	Syntax:
		for(const iterator of object)
		{
			// Statement to access iterator value
		}
*/
// Accessing values of the array index
for (let i of array)
{
	console.log(i);	
}
console.log("\n");

// Accessig characters of string
for(let j of myName)
{
	console.log(j);
}