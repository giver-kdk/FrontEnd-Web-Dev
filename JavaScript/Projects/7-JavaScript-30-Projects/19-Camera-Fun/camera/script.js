let video = document.querySelector(".player");
let canvas = document.querySelector(".photo");
let ctx = canvas.getContext("2d");
let strip = document.querySelector(".strip");
let snap = document.querySelector(".snap");

function getVideo()
{
	// The "getUserMedia()" returns a promise from camera
	navigator.mediaDevices.getUserMedia({video: true, audio: false})
	.then(localMediaStream =>
		{
			// The "video" can have "src" as object
			video.srcObject = localMediaStream;
			// Plays the video captured from camera
			video.play();
		})
	.catch(() =>
		{
			console.error("Error playing the video from camera. Please provide camera access");
		});
}

function paintToCanvas()
{
	let width = video.videoWidth;
	let height = video.videoHeight;
	canvas.width = width;
	canvas.height = height;

	// Display image from video every 16 milliseconds. Hence, giving video play effect
	return setInterval(() =>
	{
		// Canvas shows images on its context
		// The image on canvas can be shown from video with co-ordinates provided
		ctx.drawImage(video, 0, 0, width, height);
		// Take the pixel value of image. Here, "Pixels" is an object containing data array
		let pixels = ctx.getImageData(0, 0, width, height);
		// Modify the pixel values of image
		// pixels = redEffect(pixels);
		// pixels = rgbSplit(pixels);
		pixels = greenScreen(pixels);

		// Put back the modified pixel value in the canvas context 
		ctx.putImageData(pixels, 0, 0);
	}, 16)
}

function takePhoto()
{
	// Play the click sound
	snap.currentTime = 0;
	snap.play();

	// Convert the canvas image data into data URL 
	let data = canvas.toDataURL("image/jpeg");
	// Make photo downloadable
	let link = document.createElement("a");
	link.href = data;
	link.setAttribute("download", "your_photo");
	link.innerHTML = `<img src="${data} alt="Person Image"/>`;
	// "insertBefore(newChild, existingChild)" puts a child node before specified child
	// This is used here to put the link in a stack struture
	strip.insertBefore(link, strip.firstElementChild);
}

function redEffect(pixels)
{
	// Pixels is an object having data array. Since, there are 4 (R, G, B, A) values. So, we increment by 4
	for(let i = 0; i < pixels.data.length; i = i + 4)
	{
		// Change pixel data value. Mainly red value
		pixels.data[i] = pixels.data[i] + 100;			// RED
		pixels.data[i + 1] = pixels.data[i + 1] - 50;	// GREEN
		pixels.data[i + 2] = pixels.data[i + 2] - 100;	// BLUE
	}
	return pixels;
}
function rgbSplit(pixels)
{
	// Shift the current RGB pixel value to somewhere far
	for(let i = 0; i < pixels.data.length; i = i + 4)
	{
		pixels.data[i] = pixels.data[i - 150];			// RED
		pixels.data[i + 1] = pixels.data[i + 100];	// GREEN
		pixels.data[i + 2] = pixels.data[i - 150];	// BLUE
	}
	return pixels;
}

function greenScreen(pixels)
{
	let levels = {};
	let inputs = document.querySelectorAll(".rgb input");
	inputs.forEach(input =>
		{
			// Set the "key" as well as "value" according to HTML attribute
			levels[input.name] = input.value;
		});
	for(i = 0; i < pixels.data.length; i = i + 4)
	{
		red = pixels.data[i];
		green = pixels.data[i + 1];
		blue = pixels.data[i + 2];
		alpha = pixels.data[i + 3];

		let redRange = (red <= levels.rmax && red >= levels.rmin);		
		let greenRange = (green <= levels.gmax && green >= levels.gmin);		
		let blueRange = (blue <= levels.bmax && blue >= levels.bmin);		

		if(redRange && greenRange && blueRange)
		{
			// Set the alpha value to zero if the color lies between specified range
			pixels.data[i + 3] = 0;
		}
	}
	return pixels;
}

getVideo();
// When video starts playing, it triggers "canplay" event
// Execute "paintToCanvas" is video starts playing
video.addEventListener("canplay", paintToCanvas);



