// Bar Menu Logic
let menuBar = document.querySelector(".bar__menu");

menuBar.addEventListener("click", toggle_menu);
function toggle_menu()
{
	let navBar = document.querySelector(".header__main--right");
	navBar.classList.toggle("show__navbar");
}





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


// Testimonial Logic
let prevBtn = document.getElementById("left__arrow");
let nextBtn = document.getElementById("right__arrow");

prevBtn.addEventListener("click", slide_prev);
nextBtn.addEventListener("click", slide_next);

function slide_next()
{
	let active = document.querySelector('.active__item');
	if(active.nextElementSibling.nextElementSibling)
	{
		active.classList.remove("active__item");
	
		active.nextElementSibling.classList.add("active__item");
		
	}
	else
	{console.log("No Child");}
}
function slide_prev()
{
	let active = document.querySelector('.active__item');
	if(active.previousElementSibling.previousElementSibling)
	{
		// let slide = document.querySelectorAll(".testimonial__item");
		// slide.forEach((obj) =>
		// {
		// 	obj.classList.remove("testimonial__item");
		// 	obj.classList.add("testimonial__item");
		// })
		active.classList.remove("active__item");
	
		active.previousElementSibling.classList.add("active__item");
		
	}
	else
	{console.log("No Child");}
}

// Contact Form Validation Logic
let fullName = document.getElementById("username");
let email = document.getElementById("mail");
let pw = document.getElementById("pw");
let nameError = document.getElementById("name__error");
let emailError = document.getElementById("email__error");
let pwError = document.getElementById("pw__error");

fullName.addEventListener("keyup", function()
{
	console.log("Key left Up!");
	if(fullName.value.length < 5)
	{
		nameError.classList.add("active__error");
		nameError.innerHTML = "Value must be more than 4 characters";
	}
	else
	{
		nameError.classList.remove("active__error");
		nameError.innerHTML = "";
	}
});
email.addEventListener("keyup", function()
{
	console.log("Key left Up!");
	let data = email.value;
	if(!data.includes('@'))
	{
		console.log("Error");
		emailError.classList.add("active__error");
		emailError.innerHTML = "Please include '@' in your email";
	}
	else
	{
		console.log("No error");
		emailError.classList.remove("active__error");
		emailError.innerHTML = "";
	}
});
pw.addEventListener("keyup", function()
{
	console.log("Key left Up!");
	let data = pw.value;

	if(data.length < 5)
	{
		pwError.classList.add("active__error");
		pwError.innerHTML = "Weak Password";
		pwError.style.color = "red";
	}
	else if(data.length < 10)
	{
		pwError.classList.add("active__error");
		pwError.innerHTML = "Medium Password";
		pwError.style.color = "blue";
	}
	else if(data.length < 15)
	{
		pwError.classList.add("active__error");
		pwError.innerHTML = "Strong Password";
		pwError.style.color = "green";
	}
});