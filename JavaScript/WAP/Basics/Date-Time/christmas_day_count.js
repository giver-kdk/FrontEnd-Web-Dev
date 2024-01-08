// Write a JavaScript program to calculate days left until next Christmas
let date = new Date();
let christmas = new Date(date.getFullYear(), 11, 25);

if(date.getMonth() == 11 && date.getDate() > 25)
{
	christmas.setFullYear(christmas.getFullYear() + 1);
}
let difference = christmas.getTime() - date.getTime();				// Get difference in milliseconds
let daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));		// Convert milliseconds into days
console.log(`There are ${daysLeft} days left for christmas day!!!`);;
