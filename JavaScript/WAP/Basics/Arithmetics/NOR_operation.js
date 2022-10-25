// Write a JavaScript program to create the value of NOR of two given booleans.
function logical_nor(a, b)
{
	return !(a || b);
}
console.log(logical_nor(true, false));
console.log(logical_nor(false, false));
console.log(logical_nor(true, true));