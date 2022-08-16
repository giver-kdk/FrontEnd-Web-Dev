// for-in-loop is used to loop through properties of an object and array
// We can access both 'key' and 'value' of object using this loop
// Both index number and element of array can be accessed
/*
	Syntax:
		for(variable in array/1object)
		{
			// Statement to access key and value using iterator
		}
*/

// Creation of object with properties
// Here, keys are identity, age and nationaity
// Here, values are "Giver", 19 and "Nepali"
let person = {identity: "Giver", age: 19, nationality: "Nepali"};
for(let i in person)
{
	console.log(i + ":");					// Access 'key'
	console.log(person[i] + "\n");			// Access 'value'
}

// Creation of array
let array = [4, 5, 6, 7, 8];
for(let j in array)
{
	console.log(j + ": " + array[j] + "\n");	// Access 'index' and 'element' of array
}