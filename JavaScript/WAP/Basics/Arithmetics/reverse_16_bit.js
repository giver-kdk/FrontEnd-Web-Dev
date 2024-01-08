// Write a JavaScript program to reverse the bits of a given 16 bits unsigned short integer

function reverse_bit(num)
{
	// "padStart" reserves space for binary string and fills empty space with 0 
	let strBinary = num.toString(2).padStart(16, "0");
	let result = "0b" + strBinary.split("").reverse().join("");
	return Number(result);
}

console.log(reverse_bit(12));
console.log(reverse_bit(12345));
console.log(reverse_bit(10));