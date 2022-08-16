/*
Date object helps to get currrent date & time and set date & time. 
The current date is provided by the object from the number of milliseconds passed from 01-01-1970.

There are 4 ways:
variable = new Date();
variable = new Date(year, month, date, hour, minute, second, millisecond);
variable = new Date(milliseconds);
variable = new Date("Date String");
*/

// The Date object below is dynamic. So, it updates itself.
// Gives current international GMT date & time on console
// Gives curret local date & time on browser
let date1 = new Date();
console.log(date1);
// Gives local date & time in both browser and console
console.log(date1.toLocaleString());



// The Date object below is static. So, it doesn't update itself.
// Here, month input starts from 0-11. But, outputs from 1-12
// Here, hours can input from 0-23 and outputs from 1-12
// variable = new Date(year, month, date, hour, minute, second, millisecond);
let date2 = new Date(2022, 1, 12, 03, 30, 15, 12, 600);
console.log(date2.toLocaleString());
// Here, arguments upto  month (2 arguments) is compulsary. Others are optional
let date3 = new Date(2022, 1);
console.log(date3.toLocaleString());


// If single argument is given, then it is considered as milliseconds
let date4 = new Date(1657252523186);
console.log(date4.toLocaleString());


// Here, month inputs and outputs from 1-12
// Here, hours inputs and outputs from 0-23
// In date string, date can be separated by comma(,), slash(/) or dash(-) in MM/DD/YYYY format
// Time should be separated by colon(:) in HH:MM:SS format
let date5 = new Date("02 14 2022 03:40:12");
console.log(date5.toLocaleString());

let date6 = new Date("February 14 2022 03:40:12");			// Month can be written as its name
console.log(date6.toLocaleString());



