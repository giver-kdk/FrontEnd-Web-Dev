// Quantifiers specify the quantity(number) of characters to allow for selection

// Fixed 
// Any character before {n} is allowed to occur "n" times
let reg = /giv{3}r/;					// Character "v" can occur 3 times
let str1 = "I am givvvr";				// Here, "v" has occur 3 times. So, selected
let str2 = "I am givvr";				// Here, "v" doesn't occur 3 times. So, not selected
let str3 = "I am givr";					// Here, "v" doesn't occur 3 times. So, not selected

console.log("Fixed Quantity");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Range 
// Any character before {a,b} is allowed to occur "a" to "b" times
// Minimum occurrance: "a" and Maximum Occurrance: "b"
// NOTE: Make sure to avoid whitespace in range: {a, b} is not valid
reg = /giv{0,3}r/;					// Character "v" can occur 0, 1, 2 or 3 times
str1 = "I am givvr";				// Here, "v" has occur 2 times. So, selected
str2 = "I am givvvr";				// Here, "v" has occur 3 times. So, not selected
str3 = "I am givvvvr";				// Here, "v" has occur 4 times. So, not selected

console.log("Fixed Quantity");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Mixing 
// Like others, Quantifiers can also be mixed with any kind of regex expressions
reg = /giv[a-z]{3}r/;				// Character from [a-z] can occur 3 times
str1 = "I am giveeer";				// Here, "e" belongs to [a-z] and has occur 3 times. So, selected
str2 = "I am givaaar";				// Here, "a" belongs to [a-z] and has occur 3 times. So, selected
str3 = "I am giv@@@r";				// Here, "@" doesn't belong to [a-z]. So, not selected

console.log("Fixed Quantity");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();