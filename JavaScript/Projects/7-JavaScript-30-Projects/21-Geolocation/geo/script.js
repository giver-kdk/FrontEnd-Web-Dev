let arrow = document.querySelector(".arrow");
let angle = document.querySelector(".angle");
let cp = document.querySelector(".cp");

function update(data)
{
	cp.innerHTML = `Longitude: ${data.coords.longitude}<br>Latitude: ${data.coords.latitude}`;
	angle.innerHTML = `${Math.round(data.coords.heading)} deg`;
	arrow.style.transform = `rotate(${data.coords.heading}deg)`;

}
function handle(err)
{
	console.log(err);
	alert("You need to give permission to see you location info");
}

// Here, "update" is the function parameter to use data from "watchPosition()"
// "handle" is executed if any error occurs during location tracking
// Third parameter is an object mentioning:
// - "timeout" which sets minimum time(milliseconds) for data update. Basically it sets frequency of data fetch
// - "enableHighAccuracy" which gives more accurate data if set to "true"
navigator.geolocation.watchPosition(update, handle, {
	timeout: 100,
	enableHighAccuracy: false
});

