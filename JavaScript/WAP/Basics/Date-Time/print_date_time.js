// Write a JavaScript program to display the current day and time in the following format
// Today is : Tuesday
// Current time is : 10 PM : 30 : 38

let date = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednusday", "Thursday", "Friday", "Saturday"];
let noon = "AM";

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

if(hour > 12) noon = "PM";
hour = hour % 12;

console.log(`Today is : ${days[date.getDay()]}`);
console.log(`Current time is : ${hour} ${noon} : ${minute} : ${second}`);