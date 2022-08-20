// Flags are use to indicate circumstances of searching/selecting a string

// Global Flag( g )
// It indicates to select all possible pattern match in string 
let reg = /giver/;
let string = "I am giver. I am giver. I am giver";
console.log("Global Flag");
console.log(string.match(reg));					// Only 1st match is selected

reg = /giver/g;
console.log(string.match(reg));					// All matches are selected
console.log();


// Case-Insensitive  Flag( i )
// It indicates to search pattern by ignoring Uppercase or Lowercase in string 
reg = /giver/i;
string = "I am giver";
console.log("Case-Insensitive Flag");
console.log(string.match(reg));					// Matches Lowercase as well

string = "I am Giver";
console.log(string.match(reg));					// Matches Uppercase as well
console.log();


// Multi-Line  Flag( m )
// By default, "^" and "$" treats entire string as starting and ending point
// "m" flag tells "^" and "$" to treat new line as starting and ending point as well
reg = /giver$/;
// "He" and "music" are actual start and end of string
string = "He is giver\nWe like music";		
console.log("Multi-Line Flag");
console.log(string.match(reg));					// There is no "giver" at end. So, not selected

// Now, "m" treats multiline as separate start and end
reg = /giver$/m;
console.log(string.match(reg));					// "giver" has become end of a line. So, selected
console.log();

reg = /^We/m;
console.log(string.match(reg));					// "We" has become start of a line. So, selected
console.log();


// Single-Line  Flag( s )
// By default, "." symbol selects any character except new-line character
// "s" flag tells "." to select new line as well
reg = /giver./;
// Selection is done if there is any character except new-line after "giver"
string = "He is giver\nWe like music";		
console.log("Single-Line Flag");
console.log(string.match(reg));					// There is new-line after "giver". So, not selected

reg = /giver./s;
console.log(string.match(reg));					// new-line is now accepted by ".". So, selected
console.log();


// Sticky Search  Flag( y )
// By default, searching is done until the match is found
// But, with "y", the match should be found when searching just begins. If not found then, search fails
// It has higher priority than global flag( g )
reg = /giver/;
// Selection is done if there is any character except new-line after "giver"
string = "I am giver";		
console.log("Sticky Search Flag");
console.log(string.match(reg));					// "giver" is searched until found. So, selected

reg = /giver/y;									// Searching starts from 0th index of string
console.log(string.match(reg));					// "giver" is not located at 0th index. So, not selected
console.log();

reg.lastIndex = 5;								// Searching starts from 5th index of string
console.log(string.match(reg));					// "giver" is located at 5th index. So, selected
console.log();
