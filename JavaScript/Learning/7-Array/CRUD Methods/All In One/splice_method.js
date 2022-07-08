// splice() method can be used to add or remove array elements from desired position
// Adding or removing elemnts can be done simultaneously
// It actually modifies the original array
// If items deleted, then it returns the array of deleted items else returns empty array
/*
Syntax:
	arrayName.splice(index, deleteCount, updateItems);

	Here, 'index' is the point to start the operations
	'deleteCount' is the numbers of items to delete starting from 'index' point
	'updateItems' is the list of new items to be added from 'index' point
*/

let group1 = ["Ram", "Shyam", "Hari"];
let group2 = ["Ram", "Shyam", "Hari"];
let group3 = ["Ram", "Shyam", "Hari"];

// Adding items in an array
group1.splice(1, 0, "Sita", "Gita");			// Add 2 items starting from index 1
console.log("New Array after Adding Items");
console.log(group1);

// Removing item in an array
let deletedItems = group2.splice(1, 2);				// Delete 2 items starting from index 1
console.log("New Array after Removing Items");
console.log(group2);
console.log("Array of removed items");
console.log(deletedItems);

// Removing and Adding items simultaneously	
deletedItems = group3.splice(1, 1, "Sita", "Gita");	// Delete 1 item starting from index 1 and add 2 items	
console.log("New Array after Adding and Removing Items");
console.log(group3);
console.log("Array of removed Items");
console.log(deletedItems);

