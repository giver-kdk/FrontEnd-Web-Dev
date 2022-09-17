let flag = true;


for(let i =  0; i < 10; i++)
{
	if(flag) console.log("SUCCESS");
	else console.log("FAILURE");
	flag = !flag;						// Main toggle logic
}