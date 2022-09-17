// UI elements for video player
let playBtn = document.querySelector(".play__btn");
let video = document.getElementById("vid");
let progress = document.querySelector(".progress");
let progressBar = document.querySelector(".progress__bar");
let skip = document.querySelectorAll(".skip");
let range = document.querySelectorAll(".bar");
let loopBtn = document.querySelector(".loop");
let mouseIsDown = false;

// Play and Pause video 
function toggle_video(e)
{
	if(e.type == "keypress")
	{
		// Allows to play video when SPACE is pressed
		if(e.code != "Space") return;
	}
	if(video.paused)
	{
		video.play();
		playBtn.innerHTML = "❚❚";
	}
	else
	{
		video.pause();
		playBtn.innerHTML = "►";
	}
}
// Continuously increment progress fill
function update_progress()
{
	progress.style.width = `${video.currentTime / video.duration * 100}%`;
}
// Update progress fill when clicked or mouse dragged
function update_time(e)
{
	if(e.type == "mousemove")
	{	// Only update when mouse is pressed down
		if(!mouseIsDown) return;
	}
	video.currentTime = e.offsetX / progressBar.offsetWidth * video.duration;
}
// Set flag for mouse click
function set_up(){mouseIsDown = false;}
function set_down(){mouseIsDown = true;}
// Skip video duration 
function skip_video(e)
{
	if(this.dataset.value == "10")
		video.currentTime -= 10;
	else if(this.dataset.value == "25") 
		video.currentTime += 25;
}
// Change volume or video speed according to range
function update_range(e)
{
	if(this.name == "volume") video.volume = this.value;
	else video.playbackRate = this.value;
	
}
// Enable or Disable video loop 
function toggle_loop()
{
	video.loop = !video.loop;
	if(video.loop) this.style.fill = "skyblue";
	else this.style.fill = "white";
}
// Event listeners for user interaction events
playBtn.addEventListener("click", toggle_video);
video.addEventListener("click", toggle_video);
video.addEventListener("timeupdate", update_progress);
progress.addEventListener("click", update_time);
progress.addEventListener("mousemove", update_time);
progress.addEventListener("mouseup", set_up);
progress.addEventListener("mousedown", set_down);
progressBar.addEventListener("click", update_time);
progressBar.addEventListener("mousemove", update_time);
progressBar.addEventListener("mouseup", set_up);
progressBar.addEventListener("mousedown", set_down);
document.addEventListener("keypress", toggle_video);
loopBtn.addEventListener("click", toggle_loop);
skip.forEach((s) => {s.addEventListener("click", skip_video);});
range.forEach((r) => {r.addEventListener("change", update_range);});


