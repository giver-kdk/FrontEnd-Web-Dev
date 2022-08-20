// match() use dto search a matching sub-string in string
// It returns array of info about matched sub-string
// It returns array of matched sub-strings if "g" flag is used
// It retuns null on failure
// It's used as string method instead of RegExp
// We can either use fixed string or regular expression as it's arguments


let reg = new RegExp("giver", "g");
let string = "My name is giver khadka. I am a giver.";

let result = string.match(reg);
console.log(result);
