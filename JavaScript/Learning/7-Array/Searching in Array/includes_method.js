// includes() searches required item in array and return boolean value
// It returns true if atleast one item is found, else it returns false
// It can also detect 'NaN' in an array
let people = ["Ram", "Shyam", "Hari", "Ram", "Gita"];
let isPresent = people.includes("Ram");
console.log(isPresent);

if(isPresent)
{
	console.log("Item found");
}
else
{
	console.log("Item not found");
}