// We know reduce() method can flatten an array upto 1 level
// Similarly, flat() returns a flattened array upto any desired level easily
// It doesn't modify the original array
/*
Syntax:
	flattenedArray = arrayName.flat(level);
*/

// Here, 'myArray' is a 3D Array
let myArray = 
[
	[
		["Ram", "Shyam"],
		["Hari", "Sita"]
	],
	[
		["Gopal", "Rita"],
		["Gita", "Kapil"]
	]
];

console.log(myArray);
console.log(myArray.flat(1));				// 1 Level means 3D to 2D Array
console.log(myArray.flat(2));				// 2 Level means 3D to 1D Array

oneDimension = myArray.flat(Infinity);		// 'Infinity' Level converts any Array into 1D Array
console.log(oneDimension);		