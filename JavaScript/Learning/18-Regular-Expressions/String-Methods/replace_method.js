// replace() is used to replace a single sub-string with another
// It returns a new replaced string 
// We can either use fixed string or regular expression as it's arguments
// It replaces all occurrance of sub-string if "g" flag is used
// Similarly, replace() can be used to perform more flexible task using RegExp flags 

let reg1 = new RegExp("giver");
// Here, "i" flag indicates case in-sensitive 
// So, both Uppercase and Lowercase substrings are equivalent
let reg2 = new RegExp("giver", "gi");
let string = "My name is Giver Khadka. I am a giver";

let result1 = string.replace(reg1, "vision");
console.log(result1);
let result2 = string.replace(reg2, "vision");
console.log(result2);