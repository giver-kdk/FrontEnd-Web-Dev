// Write a JavaScript program to check the total marks of a student in various examinations.
// The student will get A+ grade if the total marks are in the range 89..100 inclusive,
// if the examination is "Final-exam." the student will get A+ grade
// And total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise
function result(exam, marks)
{
	if(exam == "Final-exam")
	{
		if((marks >= 90) && (marks <= 100)) return true;
		else return false;
	}
	else
	{
		if((marks >= 89) && (marks <= 100)) return true;
		else return false;
	}
}

console.log(result("Final-exam", 85));
console.log(result("Mid-exam", 89));
console.log(result("Preboard-exam", 85));
console.log(result("Final-exam", 95));