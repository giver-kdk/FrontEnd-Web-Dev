// Shorthand Character Class specifies special range of characters to allow for selection

// One Word Character "\w"
let reg = /giv\wr/;					// Any one character: _, alphabet or number is allowed in place of "\w"
let str1 = "I am giv3r";			// Selected
let str2 = "I am giv_r";			// Selected
let str3 = "I am giv@r";			// Here, "@" doesn't belong to _, alphabet or number. So, not selected

console.log("One Word Character");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Multiple Word Character "\w+"
// It allows wordly sub-string to be selected
reg = /giv\w+r/;				// >=1 character: _, alphabet or number is allowed in place of "\w+"
str1 = "I am giveea_123r";		// Selected
str2 = "I am givvvvveeer";		// Selected
str3 = "I am givvveee12@r";		// Here, "@" doesn't belong to _, alphabet or number. So, not selected

console.log("Multiple Word Character");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// One Non-Word Character "\W"
reg = /giv\Wr/;				// Any one character except: _, alphabet or number is allowed in place of "\W"
str1 = "I am giv@r";		// Selected
str2 = "I am giv#r";		// Selected
str3 = "I am giver";		// Here, "e" belong to _, alphabet or number. So, not selected

console.log("One Non-Word Character");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Multiple Non-Word Character "\W+"
// It allows non-wordly sub-string to be selected
reg = /giv\W+r/;			// >=1 character except: _, alphabet or number is allowed in place of "\W+"
str1 = "I am giv@##$r";		// Selected
str2 = "I am giv#@@#r";		// Selected
str3 = "I am give12ar";		// Here, "e12a" belong to _, alphabet or number. So, not selected

console.log("Multiple Non-Word Character");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// One Digit Character "\d"
reg = /giv\dr/;				// Any one digit from 0-9 is allowed in place of "\d"
str1 = "I am giv1r";		// Selected
str2 = "I am giv3r";		// Selected
str3 = "I am giver";		// Here, "e" doesn't belong to 0-9. So, not selected

console.log("One Digit Character");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Multiple Digit Character "\d+"
reg = /giv\d+r/;			// >=1 digit from 0-9 is allowed in place of "\d+"
str1 = "I am giv1234r";		// Selected
str2 = "I am giv3343r";		// Selected
str3 = "I am giveaor";		// Here, "eao" doesn't belong to 0-9. So, not selected

console.log("Multiple Digit Character");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// One Non-Digit Character "\D"
reg = /giv\Dr/;				// Any one non-digit is allowed in place of "\D"
str1 = "I am giver";		// Selected
str2 = "I am giv@r";		// Selected
str3 = "I am giv3r";		// Here, "3" belong to 0-9. So, not selected

console.log("One Non-Digit Character");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Multiple Non-Digit Character "\D+"
reg = /giv\D+r/;			// >=1 non-digit is allowed in place of "\D+"
str1 = "I am giveeaar";		// Selected
str2 = "I am giv@ee_r";		// Selected
str3 = "I am giv1234r";		// Here, "1234" belong to 0-9. So, not selected

console.log("Multiple Non-Digit Character");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// One Whitespace(Tab) Character "\s"
reg = /giv\sr/;				// Any one whitespace/tab character is allowed in place of "\s"
str1 = "I am giv r";		// Since, there is a whitespace. So, Selected
str2 = "I am giv\tr";		// SInce, there is a tab. So, Selected
str3 = "I am giver";		// Here, "e" is not whitespace/tab. So, not selected

console.log("One Whitespace Character");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Multiple Whitespace Character "\s+"
reg = /giv\s+r/;			// >=1 whitespace/tab is allowed in place of "\s+"
str1 = "I am giv    r";		// Selected
str2 = "I am giv\t\tr";		// Selected
str3 = "I am giv1234r";		// Here, "1234" is not whitespace/tab. So, not selected

console.log("Multiple Whitespace Character");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// One Non-Whitespace(Tab) Character "\S"
reg = /giv\Sr/;				// Any one character except whitespace/tab is allowed in place of "\S"
str1 = "I am giver";		// Selected
str2 = "I am giv@r";		// Selected
str3 = "I am giv r";		// There is whitespace/tab. So, not selected

console.log("One Non-Whitespace Character");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Multiple Non-Whitespace Character "\S+"
reg = /giv\S+r/;			// >=1 non-whitespace/tab is allowed in place of "\S+"
str1 = "I am giveeeer";		// Selected
str2 = "I am giv1234r";		// Selected
str3 = "I am giv\t\tr";		// Here, "\t\t" is not tab. So, not selected

console.log("Multiple Non-Whitespace Character");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// One Word Boundary Character "\b" (Frequently Used)
// Allows to seperate/read a standalone word in string
reg = /\bam\b/;				// "am" is selected only when there is non-wordly(W) character in place of "\b"
str1 = "I am giver";		// Since, " " is non-wordly(W) character. So, Selected
str2 = "I#am#giver";		// Since, "#" is non-wordly(W) character. So, Selected
str3 = "I_am_giver";		// Here, "_" is worldly character(w). So, not selected

console.log("One Word Boundary Character");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();


// Non-Word Boundary Character "\B"
// Opposite to "\b". So, used to select non-standalone words
reg = /\Bam\B/;				// "am" is selected only when there is wordly(w) character in place of "\B"
str1 = "I am giver";		// Since, " " is non-wordly(W) character. So, not Selected
str2 = "I#am#giver";		// Since, "#" is non-wordly(W) character. So, not Selected
str3 = "I_am_giver";		// Here, "_" is worldly character(w). So, selected

console.log("Non Word Boundary Character");
console.log(reg.exec(str1));
console.log(reg.exec(str2));
console.log(reg.exec(str3));
console.log();