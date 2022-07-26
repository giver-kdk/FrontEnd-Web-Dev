// 3D Image Sequence Play Logic
let deleteSeq = document.getElementById("delete__video");
let defragSeq = document.getElementById("defrag__video");
let processSeq = document.getElementById("process__video");

let deleteSection = document.getElementById("delete__section");
let defragSection = document.getElementById("defrag__section");
let processSection = document.getElementById("process__section");


function forward_play(eventObj, images)
{
	// Number of image sequence = 30
	for(let i =  0; i < 30; i++)
	{
		setTimeout((i) =>
		{
			let source = `${i}`.padStart(3, "0");
			let str = images.getAttribute("data-btn");
			images.src = `img/${str}_anim/${source}.png`;
		}, i * 20, i);
	}
}
function reverse_play(eventObj, images)
{
	for(let i =  29; i >= 0; i--)
	{
		setTimeout((i) =>
		{
			let source = `${i}`.padStart(3, "0");
			let str = images.getAttribute("data-btn");
			console.log(str);
			images.src = `img/${str}_anim/${source}.png`;
		}, (29 - i) * 20, i);
	}
}
deleteSection.addEventListener("mouseenter", function(eventObj){forward_play(eventObj, deleteSeq)});
deleteSection.addEventListener("mouseleave", function(eventObj){reverse_play(eventObj, deleteSeq)});
defragSection.addEventListener("mouseenter", function(eventObj){forward_play(eventObj, defragSeq)});
defragSection.addEventListener("mouseleave", function(eventObj){reverse_play(eventObj, defragSeq)});
processSection.addEventListener("mouseenter", function(eventObj){forward_play(eventObj, processSeq)});
processSection.addEventListener("mouseleave", function(eventObj){reverse_play(eventObj, processSeq)});

// Increment Counter Logic

let count = 0;
function increment_count()
{
	let countObjects = document.querySelectorAll(".counter");
	count++;
	if(count <= 1)
	{
	countObjects.forEach((obj) =>
	{
		obj.innerHTML = 0;
			let update = () =>
			{
			  let endNum = Number(obj.getAttribute('data-number'));
		
			  let startNum = Number(obj.innerHTML);
			  let step = endNum / 100;
			  if(startNum < endNum)
			  {
				obj.innerHTML = `${Math.round(startNum + step)}`;
				setTimeout(update, 10);
			  }
			  else
			  {
				obj.innerHTML = endNum;
			  }
			}
			update();
		});
	}
}

const numberContainer = document.querySelector('.numbers');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const elementPosition = numberContainer.offsetTop;
    
    if(scrolled >= (elementPosition - 400)){
        increment_count();
    }
})
