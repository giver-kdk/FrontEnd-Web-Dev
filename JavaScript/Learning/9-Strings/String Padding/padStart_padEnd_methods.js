// padStart(n) reserves 'n' number of spaces for a string and right aligns it
// It fill remaining space with whitespace
// Second parameter is used to fill emtpy space with "*" instead of whitespace
let myName = "Giver".padStart(10, "*");
console.log(myName);
console.log(myName.length);

// padEnd(n) reserves 'n' number of spaces for a string and left aligns it
// It fill remaining space with whitespace
// Second parameter is used to fill emtpy space with "*" instead of whitespace
let myGame = "Football".padEnd(15, "*");
console.log(myGame);
console.log(myGame.length);