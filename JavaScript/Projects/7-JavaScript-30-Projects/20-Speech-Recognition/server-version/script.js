let para = document.querySelector("p");
let words = document.querySelector(".words");


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
// Fires "result" event at every word in real time
recognition.interimResults = true;
// Allows to recognize audio a=continuously and improve it real-time
// This helps to avoid unwanted stopping of recognition in some browsers
recognition.continuous = true;


// "result" is triggered at every new word the user says
recognition.addEventListener("result", e =>
{
	// The result is stored in following format
	let result = e.results[0];
	let output = e.results[0][0];
	let content = output.transcript;
	para.innerText =  content;
	// "isFinal" indicates end of sentence when user tops talking
	if(result.isFinal)
	{
		recognition.stop();				// Manually stop recognition to avoid bug
		// Create new paragraph element for next speech
		para = document.createElement("p");
		words.appendChild(para);
	}
})

function restart()
{
	console.log("Recignition has stopped. Restarting again!!!");
	recognition.start();
}

// "end" event is triggered when recognition is stopped
recognition.addEventListener("end", restart);
// First, manually begin the recognition process
recognition.start();