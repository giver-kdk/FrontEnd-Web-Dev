// Write a JavaScript program to find the types of a given angle.
/*
	Types of angles:
	Acute angle: An angle between 0 and 90 degrees.
	Right angle: An 90 degree angle.
	Obtuse angle: An angle between 90 and 180 degrees.
	Straight angle: A 180 degree angle.
*/
function find(angle)
{
	if(angle >= 0 && angle < 90) return "Acute";
	else if(angle == 90) return "Right";
	else if(angle > 90 && angle < 180) return "Obtuse";
	else if(angle == 180) return "Straight";
}

console.log(find(70));
console.log(find(90));
console.log(find(120));
console.log(find(180));