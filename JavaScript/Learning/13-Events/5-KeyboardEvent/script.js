let element1 = document.getElementById("input1");
let element2 = document.getElementById("input2");

element1.addEventListener("keypress", detect_key);

element2.addEventListener("keydown", say_down);
element2.addEventListener("keyup", say_up);

// Here, 'key' returns the exact presses key and 'code' returns the Key Code
function detect_key(eventObj)
{
	console.log(`You pressed ${eventObj.key} and its code is ${eventObj.code}`);
}
function say_down()
{
	console.log(`Key is pressed down`);
}
function say_up()
{
	console.log(`Key is left up`);
}
