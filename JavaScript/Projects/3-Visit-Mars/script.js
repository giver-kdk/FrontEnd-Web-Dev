let content = document.querySelector(".container");
let welcome = document.querySelector(".welcome");
let progress = document.querySelector(".progress");

function loading()
{
	setTimeout(() => {
		progress.style.width = "5%";
		progress.style.height = "70%";
		progress.style["border-top-right-radius"] = "0%";
		progress.style["border-bottom-right-radius"] = "0%";
	}, 1000);
	setTimeout(() => {
		progress.style.width = "25%";
		// Access exact CSS Style Property using []
		progress.style["border-top-right-radius"] = "0%";
		progress.style["border-bottom-right-radius"] = "0%";
	}, 1500);
	setTimeout(() => {
		progress.style.width = "55%";
		progress.style["border-top-right-radius"] = "0%";
		progress.style["border-bottom-right-radius"] = "0%";
	}, 2000);
	setTimeout(() => {
		progress.style.width = "70%";
		progress.style["border-top-right-radius"] = "0%";
		progress.style["border-bottom-right-radius"] = "0%";
	}, 3000);
	setTimeout(() => {
		progress.style.width = "85%";
		progress.style["border-top-right-radius"] = "0%";
		progress.style["border-bottom-right-radius"] = "0%";
	}, 3500);
	setTimeout(() => {
		progress.style.width = "100%";
		progress.style["border-top-right-radius"] = "7px";
		progress.style["border-bottom-right-radius"] = "7px";

		setTimeout(() => {
			content.style.display = "none";
			document.body.style.backgroundImage = "url('img/mars.jpg')";
			document.body.style.backgroundPosition = "top";
			document.body.style.backgroundSize = "cover";
			document.body.style.backgroundRepeat = "no-repeat";
			welcome.style.display = "block";
		}, 1000);
	}, 4000);
}
loading();