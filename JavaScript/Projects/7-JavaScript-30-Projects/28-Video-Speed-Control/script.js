let video = document.querySelector(".vid");
let speed = document.querySelector(".speed");
let speedLevel = document.querySelector(".speed_level");
let select = false;


function handleMouseDown(e)
{
	e.preventDefault();
	select = true;
	speed.classList.add("select");
	let x = speed.clientHeight - (e.clientY - speed.offsetTop);
	let percent = x / speed.clientHeight;
	speedLevel.style.height = `${percent * speed.clientHeight}px`;
	let rate = ((4 - 0.5) * percent + 0.5).toFixed(1);
	// console.log(rate);
	speedLevel.textContent = `${rate}x`;
	video.playbackRate = rate;
}
function handleMouseUp(e)
{
	select = false;
	speed.classList.remove("select");
}
function handleMouseLeave(e)
{
	select = false;
	speed.classList.remove("select");
}
function handleMouseMove(e)
{
	e.preventDefault();
	if(select)
	{
		console.log("moved");
		let x = speed.clientHeight - (e.clientY - speed.offsetTop);
		let percent = x / speed.clientHeight;
		speedLevel.style.height = `${percent * speed.clientHeight}px`;
		let rate = ((4 - 0.5) * percent + 0.5).toFixed(1);
		// console.log(rate);
		speedLevel.textContent = `${rate}x`;
		video.playbackRate = rate;
	}
}

speed.addEventListener("mousedown", handleMouseDown);
speed.addEventListener("mouseup", handleMouseUp);
speed.addEventListener("mouseleave", handleMouseLeave);
speed.addEventListener("mousemove", handleMouseMove);