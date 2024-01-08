// Write a JavaScript program to check whether a point lies strictly inside a given circle
// Here, (x, y) is center, "r" is radius and (a, b) is the point
function inside_circle(x, y, r, a, b)
{
	let dx = Math.abs(x - a);
	let dy = Math.abs(y - b);
	if(dx <= r && dy <= r) return true;
	else return false;
}

console.log(inside_circle(0, 0, 10, 5, 5));
console.log(inside_circle(0, 0, 10, 5, 15));
console.log(inside_circle(0, 0, 5, 2, 3));