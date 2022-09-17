// Multiple pattern characters can be grouped as a singe entity(sub-string)

// Using group with quantifiers
// Entire sub-string as group can occur "n" times 
let reg = /g(ive){3}r/;					// "ive" should occur 3 times
let str1 = "I am giveiveiver";			// Selected
let str2 = "I am giveiver";				// Here, "ive" has occur 2 time. So, not selected
let str3 = "I am giver";				// Here, "ive" has occur 1 time. So, not selected

console.log("\nSimple Grouping");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Mixed 
// Any regex expression can be grouped to form desired expression
reg = /g(iv){0,2}e([a-z]r){2}/;					// "iv" should occur 0, 1 or 2 times and "[a-z]r" should occur 2 times
reg = /g(iv){0,2}e([a-z]){2}/;					// "iv" should occur 0, 1 or 2 times and "[a-z]r" should occur 2 times
str1 = "I am giveerer";							// Selected
str2 = "I am givivearar";						// Selected
str3 = "I am givear";							// Here, "ar" has occur 1 time. So, not selected

console.log("\nMixed Grouping");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();