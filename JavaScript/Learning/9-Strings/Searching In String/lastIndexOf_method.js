// Similar to indexOf(), but returns index of last occurrance of sub-string in a string
// Returns -1 on failure
// Searches from start-to-end

let myName = "My name is Giver Khadka. It is unique.";
let index1 = myName.lastIndexOf("is", myName.length - 3);		// Searches from given index to start
console.log(index1);
