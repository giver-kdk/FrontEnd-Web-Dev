// Normally split() method takes the separating string as argument to convert string into array
// We can use regex for selecting the separating characters and pass that regex as split() argument

const str = 'one two, three4four';
// Here, >=1 occurrance of Whitespace, Comma or Digit is selected
let reg = /[\s,\d]+/;
const result = str.split(reg);
console.log(result);
