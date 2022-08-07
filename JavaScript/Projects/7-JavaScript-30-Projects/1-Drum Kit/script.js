let keys = document.querySelectorAll(".keyboard");

function play_beat(eventObj)
{
	const keypad = document.querySelector(`div[data-key="${eventObj.keyCode}"]`);
	const sound = document.querySelector(`audio[data-value="${eventObj.keyCode}"]`);
	keypad.classList.add("playing");

	sound.currentTime = 0;
	sound.play();
}

function remove_status(eventObj)
{
	const keypad = document.querySelector(`div[data-key="${eventObj.keyCode}"]`);
	eventObj.target.classList.remove("playing");
}

keys.forEach((key) =>
{
	key.addEventListener("transitionend", remove_status);
});

window.addEventListener("keydown", play_beat);