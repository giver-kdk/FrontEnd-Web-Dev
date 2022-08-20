// Use [] to include character set that is allowed to select

// Specific
let reg = /giv[aei]r/;					// Any one character: a, e or i is allowed in place of [aei]
let str1 = "I am givar";				// Selected
let str2 = "I am giver";				// Selected
let str3 = "I am givur";				// Here, "u" doesn't belong to a, e, or i. So, not selected

console.log("Specific Set");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Range
reg = /giv[a-z]r/;					// Any one character: a to z is allowed in place of [a-z]
str1 = "I am givor";				// Selected
str2 = "I am giver";				// Selected
str3 = "I am giv@r";				// Here, "@" doesn't belong to a to z. So, not selected

console.log("Range Set");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Complement 
// If "^" is used inside character set, then that character set is complemented
// "^" outside the [] has different meaning(string starts with)
reg = /giv[^aei]r/;					// Any one character except: a to z is allowed in place of [a-z]
str1 = "I am giv@r";				// Here, "@" doesn't belong to a, e, or i. So, Selected
str2 = "I am givur";				// Here, "u" doesn't belong to a, e, or i. So, Selected
str3 = "I am giver";				// Here, "e" belong to a, e or i. So, not selected

console.log("Complement Specific Set");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Multiple 
// We can use as many character sets as we want
reg = /g[iou]v[a-z]r/;				// Specified character allowed in palce of [iou] and [a-z]
str1 = "I am giver";				// Here, "i" and "e" belong to [iou] and [a-z]. So, Selected
str2 = "I am guvur";				// Here, "u" and "u" belong to [iou] and [a-z]. So, Selected
str3 = "I am gav@r";				// Here, "a" and "@" doesn't belong to [iou] and [a-z]. So, not selected

console.log("Multiple Set");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Combined 
// We can combine as many character sets as we want inside a []
reg = /giv[a-zA-Z]r/;				// Any one character: a-z and A-Z is allowed in palce of [a-zA-Z]
str1 = "I am giver";				// Here, "e" belong to [a-zA-Z]. So, Selected
str2 = "I am givUr";				// Here, "U" belong to [a-zA-Z]. So, Selected
str3 = "I am giv@r";				// Here, "@" doesn't belong to [a-zA-Z]. So, not selected

console.log("Combined Set");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Number 
reg = /giv[0-9]r/;				// Any one character: 0 to 9 is allowed in palce of [0-9]
str1 = "I am giv3r";				// Here, "3" belong to [0-9]. So, Selected
str2 = "I am giv4r";				// Here, "4" belong to [0-9]. So, Selected
str3 = "I am giver";				// Here, "e" doesn't belong to [0-9]. So, not selected

console.log("Number Set");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();