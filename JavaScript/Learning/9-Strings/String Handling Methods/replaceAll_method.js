// replaceAll() is similar to replace(), but it replaces every occurance of the string to be replaced
// replaceAll() returns a new string after replacement
// It doesn't modify the original string
// It searches the string to be replaced from start-to-end
// It returns the original string on failure

let myName = "My name is Giver Khadka. Giver means the one who gives.";
let newName = myName.replaceAll("Giver", "Rudra");

console.log(myName);
console.log(newName);
