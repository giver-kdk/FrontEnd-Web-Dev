// Date get methods can extract specific date parts from the date object

let date1 = new Date("07/8/2022, 09:45:36");
console.log(date1.toLocaleString());

// getFullYear() returns year as integer
let year = date1.getFullYear();
console.log(year);

// getMonth() returns month as integer from 0-11
let month = date1.getMonth();	// In above date, month = 07 but here we get month = 06
console.log(month);

// getDate() returns 'gatey' as integer from 1-31
let date = date1.getDate();
console.log(date);

// getDay() returns 'Sun, Mon, Tue...' as integer from 0-6
// In above specified date, it is 'Friday'. So, we should get '5'
let day = date1.getDay();
console.log(day);