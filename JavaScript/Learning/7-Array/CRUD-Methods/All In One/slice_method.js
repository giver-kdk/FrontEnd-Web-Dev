// slice() method is use to splice(cut) the array into new array
// It doesn't affect the origial array
// It returns the new array sliced from start index upto ending 
// If both start and end index is specified, then it slices array from start upto end index(not including) 
/*
Syntax:
	slice(start, end);

	Here, 'start' is the index from where to slice the array from
	'end' is the index upto which we slice the array. But excluding that 'end' index element
	'end' is optional parameter 
*/

let group1 = ["Ram", "Shyam", "Hari", "Sita", "Gita"];
let group2 = ["Ram", "Shyam", "Hari", "Sita", "Gita"];
// Slicing Array upto end
let newGroup1 = group1.slice(2);			// Slices array from index-2 to end
console.log(group1);
console.log(newGroup1);
// Slicing Array upto specified index
let newGroup2 = group2.slice(1, 3);			// Slices array from index-1 to index-2(Just less than 3)
console.log(group2);
console.log(newGroup2);

