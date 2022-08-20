// test() is just used to indicate whether a sub-string is present in a string or not
// It returns boolean value: true if found, else false

let reg = new RegExp("give", "g");
let string = "my name is giver khadka";

isPresent = reg.test(string);
console.log(isPresent);