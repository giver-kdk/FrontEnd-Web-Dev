// Metacharacters have special meaning during pattern processing

// "." Dot Symbol
// It allows any single character
let reg = /giv.r/;					// String can have any character in place of "."
let str1 = "I am giver";
let str2 = "I am givir";
let str3 = "I am giv@r";

console.log("\nDot Symbol");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// "*" Star Symbol
// It allows 0 or more repeatation of character before "*"
reg = /giv*r/;						// Character "v" before "*" can occur >= 0 times
str1 = "I am givvvvvr";				// Here, "v" has occured >0 times. So, selected
// Any other extra character is not allowed
str2 = "I am gieeeeer";				// Here, there is "e" instead of "v". So, not selected 
str3 = "I am gir";					// Here, "v" has occured 0 time. So, selected

console.log("\nStar Symbol");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// "+" Plus Symbol
// It allows 1 or more repeatation of character before "+"
reg = /giv+r/;						// Character "v" before "+" can occur >=1 times
str1 = "I am givvvvvr";				// Here, "v" has occured >1 times. So, string is selected
str2 = "I am givr";					// Here, "v" has occured 1 time. So, selected
str3 = "I am gir";					// Here, "v" has occured 0 time. So, not selected

console.log("\nPlus Symbol");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// "?" Question Mark Symbol (Optional Character Symbol)
// It allows 0 or 1 occurrance of character before "?"
// It makes any character just optional(present or absent)
reg = /giv?r/;						// Character "v" before "?" can occur 0 or 1 time
str1 = "I am givvvvvr";				// Here, "v" has occured >1 times. So, not selected
str2 = "I am givr";					// Here, "v" has occured 1 time. So, selected
str3 = "I am gir";					// Here, "v" has occured 0 time. So, selected

console.log("\nQuestion Mark Symbol");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// "^" Caret Symbol (String Starts With Symbol)
// Checks whether the string starts with sub-string just after  "^"
reg = /^I am/;						// If, string starts with "I am", then selected
str1 = "I am";						// Selected
str2 = "I am giver";				// Selected
str3 = "giver";						// Here, string doesn't start with "I am" So, not selected

console.log("\nCaret Symbol");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// "$" Dollar Symbol (String Ends With Symbol)
// Checks whether the string ends with sub-string just before  "$"
reg = /giver$/;						// If, string ends with "giver", then selected
str1 = "I am";						// Here, string doesn't end with "giver" So, not selected
str2 = "I am giver";				// Selected
str3 = "giver";						// Selected

console.log("\nDollar Symbol");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// NOTE: If we actually want to use metacharacters as normal characters then, preceed with "\"
console.log("\nActual Normal Symbols");
reg = /giv\.r/;
str1 = "I am giv.r";
console.log(reg.exec(str1));


reg = /giv\*r/;
str1 = "I am giv*r";
console.log(reg.exec(str1));


reg = /giv\+r/;
str1 = "I am giv+r";
console.log(reg.exec(str1));


reg = /giv\?r/;
str1 = "I am giv?r";
console.log(reg.exec(str1));


reg = /giv\^r/;
str1 = "I am giv^r";
console.log(reg.exec(str1));


reg = /giv\$r/;
str1 = "I am giv$r";
console.log(reg.exec(str1));
