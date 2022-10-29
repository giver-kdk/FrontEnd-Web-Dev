// Write a JavaScript program to reverse the order of the bits in a given integer

function bit_rev(number)
{
	let binStr = number.toString(2);			// Binary String
	
	// Here, the result is just string representation of binary number
	let reversedStr = binStr.split("").reverse().join("");
	// Here, "0b" actually makes the number binary. So, that we can convert it into Decimal
	let result = Number("0b" + reversedStr);
	// Final result is always displayed as Decimal by the console
	console.log(result);
}

bit_rev(14);
bit_rev(54);
bit_rev(234);

