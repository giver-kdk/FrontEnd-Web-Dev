let scoreCount = document.querySelector(".score__count");
let holes = document.querySelectorAll(".hole");
let moles = document.querySelectorAll(".mole");
let playBtn = document.querySelector(".play__btn");
let score = 0, prevHole = 0, start = false, finish = false;

function start_game()
{
	if(!start)
	{
		console.log("game start");
		score = 0;
		scoreCount.textContent = `Score: ${score}`;
		start = true;
		finish = false;
		game_loop();
		setTimeout(() =>
		{
			start = false;
			finish = true;
			console.log("game end");
		}, 10000);
	}
}
function game_loop()
{
	let time = randomTime();
	let hole = randomHole().querySelector(".mole");
	
	hole.classList.add("active");
	console.log("start");
	setTimeout(() =>
	{
		hole.classList.remove("active");
		if(!finish) game_loop();
	}, time);
	
}

function randomTime()
{
	let min = 200, max = 1000;
	let random = Math.round(Math.random() *(max - min) + min);
	return random;
}
function randomHole()
{
	let min = 0, max = 8;
	let random = Math.round(Math.random() *(max - min) + min);
	if(random == prevHole) return randomHole();
	prevHole = random;
	return holes[random];
}

function setScore(e)
{
	
	e.stopPropagation();
	e.target.classList.remove("active");
	score++;
	console.log("score...");
	scoreCount.textContent = `Score: ${score}`;

}
function skipScore(e)
{
}

playBtn.addEventListener("click", start_game);

// holes.forEach(hole => hole.addEventListener("click", skipScore, false));
moles.forEach(mole => mole.addEventListener("click", setScore));