// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050
let date = new Date(2014, 0 , 1);

for(let i = 2014; i <= 2050; i++)
{
	date.setFullYear(i);
	if(date.getDay() == 0)
	{
		console.log(`Year ${date.getFullYear()}'s 1st January is Sunday`);
	}
}