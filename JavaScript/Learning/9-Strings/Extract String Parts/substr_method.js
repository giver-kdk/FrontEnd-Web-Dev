// substr() is similar to  slice() but its 2nd paramter specifies the length of new string
// It handles negative paramters differently than slice()
// This method is deprecated. So, not recommended to use

let myName = "Giver Khadka";
let newName = myName.substr(0, 5);
// Can easily extract sub-string from backside
let lastName = myName.substr(-6);
console.log(newName);
console.log(lastName);


