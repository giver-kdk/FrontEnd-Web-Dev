// Write a JavaScript program to convert a given number(in minutes) to hours and minutes
function convert(num){
	let difference = num % 60;
	let hour = (num - difference) / 60;
	console.log(`${hour}hrs and ${difference}mins`);
}

convert(120);
convert(450);
convert(345);