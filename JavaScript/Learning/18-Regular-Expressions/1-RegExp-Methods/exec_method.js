// exec() searches a sub-string in a string only once even though "g" flag is used
// exec() returns array of info about found sub-string
// exec() returns null on failure
// On every execution of exec(), it updates the value of "lastIndex" property of regex object
// The "lastIndex" means last index of matched pattern in string
// "lastIndex" resets automatically when regex object is modified/redefined
/*
	Syntax:
	variable = reg_exp.exec(string)
*/

// Creating regular expression
// Method 1
// This is a standard method for using regex
let reg1 = /giver/g;
console.log(reg1.source);					// Returns actual "pattern" used as string
console.log(reg1.flags);					// Returns all "flags" used as string
console.log(reg1.global);					// Returns true if global("g") flag used
console.log(reg1.ignoreCase);				// Returns true if "i" flag used
// Here, "giver" inside // is pattern and "g" is flag to indicate scan entire string(global)
// Flag is optional

// Method 2 ( This methid allows us to use string variable as pattern and modifiers)
let reg2 = new RegExp("giver", "g");
// Here, "giver" is pattern and "g" is a modifier/flag


let string = "My name is giver khadka";
let result = reg1.exec(string);
console.log(result);
// lastIndex of "reg1" is updated. So, next time searching starts from updated index
console.log(reg1.lastIndex);
reg1.lastIndex = 0;						// Reset lastIndex to search from starting again

result = reg1.exec(string);
console.log(result);