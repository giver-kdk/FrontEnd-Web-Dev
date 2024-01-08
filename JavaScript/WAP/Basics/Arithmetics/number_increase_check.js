// Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
// Strict mode means increasing with increment only and soft mode means increasing with little decrement too
function check_mode(a, b, c)
{
	if(a < b && b < c) console.log("Strict Mode");
	else console.log("Soft Mode");
}	

check_mode(1, 2, 3);
check_mode(20, 10, 50);
check_mode(10, 7, 5);
check_mode(30, 45, 25);
check_mode(5, 10, 15);
