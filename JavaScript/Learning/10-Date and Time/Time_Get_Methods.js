// Time get methods can extract specific time parts from the date object
// The Date object created here is static. So, it doesn't update itself like current date.
let date1 = new Date("07/8/2022, 09:45:30");
console.log(date1.toLocaleString());

// Date.now() returns number of milliseconds from 01/01/1970 to current date & time
// This can be useful for measuring time difference between proccesses and more
let currentMilliseconds = Date.now();
console.log(currentMilliseconds);

// getTime() returns number of milliseconds from 01/01/1970 to specified date & time
let time = date1.getTime();
console.log(time);

// getHour() returns hours as integer from 0-23
let hours = date1.getHours();	
console.log(hours);

// getMinutes() returns hours as integer from 0-59
let minutes = date1.getMinutes();	
console.log(minutes);

// getSecond() returns seconds as integer from 0-59
let seconds = date1.getSeconds();
console.log(seconds);

// getMilliseconds() returns milliseconds as integer from 0-999
let milliseconds = date1.getMilliseconds();
console.log(milliseconds);		// We get 0 because no time has passed for above created Date object
