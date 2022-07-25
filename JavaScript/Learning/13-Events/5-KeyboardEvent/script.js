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
function say_down(eventObj)
{
	console.log(`Key is pressed down`);
	console.log(`You pressed ${eventObj.key} and its code is ${eventObj.code}`);
	console.log(`The key code is ${eventObj.keyCode}`);
}
function say_up(eventObj)
{
	console.log(`Key is left up`);
	console.log(`You pressed ${eventObj.key} and its code is ${eventObj.code}`);
	console.log(`The key code is ${eventObj.keyCode}`);
}
