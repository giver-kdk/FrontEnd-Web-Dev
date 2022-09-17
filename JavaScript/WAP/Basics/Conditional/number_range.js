// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400
function test_number(num)
{
	if(((100 - num) <= 20) || (400 - num) <= 20) return true;
	else return false;
}
console.log(test_number(80)); 
console.log(test_number(30)); 
console.log(test_number(50)); 
console.log(test_number(380)); 