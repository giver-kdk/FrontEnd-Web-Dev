let videos = Array.from(document.querySelectorAll("[data-time]"));

let sec = videos.map((video) =>
{
	let strTime = (video.dataset.time).split(":");
	let numTime = strTime.map(time => Number(time));
	let [minute, second] = [...numTime];
	let totalSec = minute * 60 + second;
	return totalSec;
});

let duration = sec.reduce((accum, elem) =>
{
	return (accum + elem);
});

let date = new Date(duration * 1000);
console.log(`Total videos duration is ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
