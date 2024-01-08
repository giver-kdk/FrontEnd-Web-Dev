// charCodeAt() returns the Unicode of the character at specified index
// In JS, instead of ASCII value, charcaters the unicode UTF-16

let myName = "Giver Khadka";
let character = myName.charAt(4);
let unicode = myName.charCodeAt(4);
console.log(character);
console.log(unicode);