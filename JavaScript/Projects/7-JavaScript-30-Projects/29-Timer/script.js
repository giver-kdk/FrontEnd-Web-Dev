let timeSetter = document.querySelectorAll("[data-time]");
let timeLeft = document.querySelector(".time_left");
let timeEnd = document.querySelector(".time_end");
let timeInput = document.querySelector(".time_input");
let btn = document.querySelector(".btn");
let stopWatch;

function setTime(e)
{
	console.log("Time Set");
	let seconds = 0;
	if(e.target.hasAttribute("data-time"))
	{
		seconds = e.target.dataset.time;
	}
	else
	{
		if(Number(timeInput.value))
		{
			seconds = Number(timeInput.value)*60;
		}
	}
	console.log(seconds);
	displayTime(seconds);
}
function displayTime(seconds)
{
	let start = Date.now();
	let end = new Date(start + seconds*1000);
	// seconds = end - start;
	let minute = Math.floor((seconds) / 60);
	minute = minute > 10 ? `${minute}` : `0${minute}`;
	let remainingSec = Math.round((seconds) % 60);
	remainingSec = remainingSec > 10 ? `${remainingSec}` : `0${remainingSec}`;
	timeLeft.textContent = `${minute}:${remainingSec}`;

	let endHour = `${end.getHours() % 12 > 10 ? `${end.getHours() % 12}`: `0${end.getHours() % 12}`}`;
	let endMinute = `${end.getMinutes() > 10 ? `${end.getMinutes()}`: `0${end.getMinutes()}`}`;
	timeEnd.textContent = `We'll be back in ${endHour}:${endMinute}`;
	clearInterval(stopWatch);
	if(seconds)							// If second value is non-zero
	{
		stopWatch = setInterval(() =>
		{
			seconds = Math.abs(end - Date.now());
			minute = Math.floor((seconds/1000) / 60);
			console.log(seconds);
			console.log(minute);
			remainingSec = Math.round((seconds/1000) % 60);
			timeLeft.textContent = `${minute > 10 ? `${minute}`: `0${minute}`}:${remainingSec  > 10 ? `${remainingSec}`: `0${remainingSec}`}`;
			if(remainingSec == 0) clearInterval(stopWatch);
		}, 1000);
	}

}
timeSetter.forEach(setter => setter.addEventListener("click", setTime));
btn.addEventListener("click", setTime);