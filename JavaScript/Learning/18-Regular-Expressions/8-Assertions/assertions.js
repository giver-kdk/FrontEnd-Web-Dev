// Assertions are basically a condition set for selection of pattern
// It doesn't need to be selected. It's used to select other patterns from its condition

// Positive Lookahead(?=)
let reg = /gi(?=v)/;				// Here, "gi" is selected if there is "v" in its right side(ahead)
let str1 = "I am giver";			// Selected
let str2 = "I am giv";				// Selected
let str3 = "I am gir";				// There is no "v" after "gi". So, not selected

console.log("Positive Lookahead Assertion");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Negative Lookahead(?=)
reg = /gi(?!v)/;				// Here, "gi" is selected if there is no "v" in its right side(ahead)
str1 = "I am giver";			// There is "v" after "gi". So, not selected
str2 = "I am giv";				// There is "v" after "gi". So, not selected
str3 = "I am gir";				// There is no "v" after "gi". So, selected

console.log("Negative Lookahead Assertion");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Positive Lookbehind(?<=)
reg = /(?<=i)ver/;				// Here, "ver" is selected if there is "i" in its left side(behind)
str1 = "I am giver";			// Selected
str2 = "I am iver";				// Selected
str3 = "I am gever";				// There is no "i" before "ver". So, not selected

console.log("Positive Lookbehind Assertion");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Negative Lookbehind(?<!)
reg = /(?<!i)ver/;				// Here, "ver" is selected if there no is "i" in its left side(behind)
str1 = "I am giver";			// There is "i" before "ver". So, not selected
str2 = "I am iver";				// There is "i" before "ver". So, not selected
str3 = "I am gever";			// There is no "i" before "ver". So, selected

console.log("Negative Lookbehind Assertion");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Mixed Assertion
// Here, only that "giver khadka" is selected where there is no "am" after it
// "\.\.\." means "..." as normal dot characters
reg = /.{6}khadka(?!.*am)\.\.\./;					// Here, ".{6}" means any sub-string of length 6
str1 = "giver khadka...I am giver khadka...";		// Second "giver khadka" is selected

console.log("Mixed Assertion");
console.log(reg.exec(str1));
console.log();



