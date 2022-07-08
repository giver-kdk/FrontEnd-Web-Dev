// Time set methods can set/change specific time parts on the date object
// The Date object created here is static. So, it doesn't update itself like current date.
let date1 = new Date("07/8/2022, 09:45:30");
console.log(date1.toLocaleString());

// setTime() sets number of milliseconds from 01/01/1970 to required date & time
date1.setTime(1657252830000);
console.log(date1.getTime());

// setHour() sets hours as integer from 0-23
date1.setHours(03);	
console.log(date1.getHours());

// setMinutes() sets hours as integer from 0-59
date1.setMinutes(12);	
console.log(date1.getMinutes());

// setSecond() sets seconds as integer from 0-59
date1.setSeconds(15);
console.log(date1.getSeconds());

// setMilliseconds() sets milliseconds as integer from 0-999
date1.setMilliseconds(200);
console.log(date1.getMilliseconds());		// We get 200 as we had set

// Final modified time on Date object
console.log(date1.toLocaleString());