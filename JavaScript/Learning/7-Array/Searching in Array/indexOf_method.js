// indexOf() return the index of first occurrance of element found in the array
// If element not found then it returns -1
// It searches element from start-to-end of array
// It can't detect 'NaN'
/*
syntax:
	arrayName.indexOf(item, startIndex)
	Here, 'item' is element to search and 'startIndex' is the index from where to start searching
	'startIndex' is optional
*/
let people = ["Ram", "Shyam", "Hari", "Sita", "Hari"];
let numbers = [5, 6, 7, 5, 9];
let index1 = people.indexOf("Hari");
let index2 = numbers.indexOf(5);
console.log(index1);
console.log(index2);

let index3 = people.indexOf("Giver", 2);		// Searches "Giver" from index-2 to end
if(index3 != -1)
{
	console.log(index3);
}
else
{
	console.log("Item not found");
}