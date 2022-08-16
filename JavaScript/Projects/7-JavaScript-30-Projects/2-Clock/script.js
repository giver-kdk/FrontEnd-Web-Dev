let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

setInterval(show_time, 1000);

function show_time()
{
	let time = new Date();
	// Get second and convert into degree
	// Subtract with 90, since default 'div' angle is 90 degree 
	let secondDeg = ((time.getSeconds() / 60) * 360) - 90;
	let minuteDeg = ((time.getMinutes() / 60) * 360) - 90;
	// Convert 24 hr format into 12 hr format
	let hourDeg = (((time.getHours() >= 12 ? (time.getHours() - 12): time.getHours()) / 12) * 360) - 90;
	// Get exact accurate hour position with respect to minutes position 
	hourDeg = hourDeg + (time.getMinutes() / 2);
	// Update CSS transform roation using Template String
	hour.style.transform = `rotate(${hourDeg}deg)`;
	minute.style.transform = `rotate(${minuteDeg}deg)`;
	second.style.transform = `rotate(${secondDeg}deg)`;
}
