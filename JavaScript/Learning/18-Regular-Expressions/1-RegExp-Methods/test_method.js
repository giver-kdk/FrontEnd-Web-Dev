// test() is just used to indicate whether a sub-string is present in a string or not
// It returns boolean value: true if found, else false
// On every execution of test(), it updates the value of "lastIndex" property of regex object


let reg = new RegExp("giver", "g");
let string = "my name is giver khadka";

isPresent = reg.test(string);
console.log(isPresent);
// Since, lastIndex is updated to last index of matched pattern. So, next search won't work
console.log(reg.lastIndex);

isPresent = reg.test(string);
console.log(isPresent);