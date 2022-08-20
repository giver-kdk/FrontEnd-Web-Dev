// search() searches the index of matched sub-strign in a string
// It returns first base index of found sub-string
// It returns null on failure
// We can either use fixed string or regular expression as it's arguments


let reg = new RegExp("giver", "g");
let string  = "My name is giver khadka. I am a giver";

let result = string.search(reg);
console.log(result);