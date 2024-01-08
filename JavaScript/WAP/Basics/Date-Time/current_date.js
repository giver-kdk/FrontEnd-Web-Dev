// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy

let date = new Date();

let format1 = date.toLocaleDateString();
let format2 = format1.replaceAll("/", "-");

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

console.log(format1);
console.log(format2);
console.log(`${day}-${month}-${year}`);
console.log(`${day}/${month}/${year}`);
