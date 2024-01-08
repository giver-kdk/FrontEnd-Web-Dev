 let canvas = document.querySelector(".sheet");
 canvas.width = window.innerWidth;		// Set width from JS needed instead of CSS
 canvas.height = window.innerHeight;
 let ctx = canvas.getContext("2d");
 ctx.strokeStyle = "#BADA55";			// Color of brush
 ctx.lineJoin = "round";				// Make line solid smooth
 ctx.lineCap = "round";					// Make line end rounded
 ctx.lineWidth = 0;						// Width of the line

 let isDrawing = false;					// Drawing Flag
 let lastX = 0;							// Drawing start Position
 let lastY = 0;
 let hue = 0;
 let size = 20;
 let direction = true;					// Stroke size increase/decrease direction

function draw(e)
{
	if(!isDrawing) return;
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.lineWidth = size;
	console.log(ctx);
	ctx.beginPath();					// Initiate drawing
	ctx.moveTo(lastX, lastY);			// Line start point
	ctx.lineTo(e.offsetX, e.offsetY);	// Line end point
	ctx.stroke();						// Create line
	lastX = e.offsetX;					// Update initial point for continuous line
	lastY = e.offsetY;
	hue++;								// Change color
	if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1)
	{
		direction = !direction;			// Change size direction
	}
	if(direction) size++;
	else size--;
}

 canvas.addEventListener("mousemove", draw);
 canvas.addEventListener("mousedown", (e) =>
 {
	lastX = e.clientX;					// Set current click point as start position
	lastY = e.clientY;
	isDrawing = true;
 });
 canvas.addEventListener("mouseup", () => isDrawing = false);
 canvas.addEventListener("mouseout", () => isDrawing = false);