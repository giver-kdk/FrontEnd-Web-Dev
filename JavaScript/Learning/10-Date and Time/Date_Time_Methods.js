// Methods of 'Date' object can extract both date and time separately from that Date object.

let date1 = new Date();
// toLocaleString() returns local date and time
let dateTime = date1.toLocaleString();
console.log(dateTime);

// toLocaleDateString() returns local date only
let date = date1.toLocaleDateString();
console.log(date);

// toLocaleTimeString() returns local time only
let time = date1.toLocaleTimeString();
console.log(time);




// toString() returns local date and time in detail
let dateTimeString = date1.toString();
console.log(dateTimeString);

// toDateString() returns local date in detail
let dateString = date1.toDateString();
console.log(dateString);

// toTimeString() returns local time in detail
let timeString = date1.toTimeString();
console.log(timeString);