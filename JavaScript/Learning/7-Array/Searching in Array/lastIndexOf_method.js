// Same as indexOf(), but searches items from end-to-start of the array
// So, lastIndexOf() return index of last occurrance of required item/element

let people = ["Ram", "Shyam", "Hari", "Shyam", "Sita"];
let index = people.lastIndexOf("Shyam", 4);			// Searches "Shyam" from index-4 to start
if(index != -1)
{
	console.log(index);
}
else
{
	console.log("Item not found");
}