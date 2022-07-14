music = document.getElementById("container");

element = document.getElementById("play");
element.addEventListener("click", playSong);

// Detect random key press on website without focus on any element
document.addEventListener("keypress", playSong);

function playSong()
{
	let num = Math.ceil(Math.random() * 10);
	if(num > 5)
	{
		num = num - 5;
	}
	let songName = `Song${num}.mp3`;
	music.src = songName;
	music.play(); 
}

