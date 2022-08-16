// Date set methods can set/change specific date part on the date object

let date1 = new Date("07/8/2022, 09:45:36");
console.log(date1.toLocaleString());

// setFullYear() sets year as integer
date1.setFullYear(2019);
console.log(date1.toLocaleString());	

// setMonth() sets month as integer from 0-11
date1.setMonth(02);	// Here we set month = 02 which means 'March'
console.log(date1.toLocaleString());		// Prints month = 03

// setDate() sets 'gatey' as integer from 1-31
date1.setDate(12);
console.log(date1.toLocaleString());	

// Day is automatically set according to above date
console.log(date1.getDay());