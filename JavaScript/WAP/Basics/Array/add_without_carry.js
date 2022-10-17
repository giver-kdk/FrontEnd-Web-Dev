// Write a JavaScript to add two positive integers without carry.
function add(num1, num2)
{
	let result = 0;
	let mul = 1;
	while(num1 > 0 & num2 > 0)
	{
		let last1 = num1 % 10;
		let last2 = num2 % 10;
		result = result + mul * Math.floor((last1 + last2) % 10);
		num1 = Math.floor(num1 / 10);
		num2 = Math.floor(num2 / 10);
		mul = mul * 10;
	}
	console.log(result);
}
add(222, 911);
add(200, 900);


// function add_two_int_without_carrying(n1, n2) {
//     var result = 0,
//         x = 1;
//     while (n1 > 0 && n2 > 0) {
//         result += x * ((n1 + n2) % 10);
//         n1 = Math.floor(n1 / 10);
//         n2 = Math.floor(n2 / 10);
//         x*= 10;
//     }
//     return result;
// }
// console.log(add_two_int_without_carrying(322, 911))
// console.log(add_two_int_without_carrying(200, 900))