// Create a object that requests to produce speech
let msg = new SpeechSynthesisUtterance();
let voices = [];
let voicesMenu = document.querySelector("#voice");
let controls = document.querySelectorAll('[type="range"], [type="text"]');
let speakBtn = document.querySelector("#speak");
let stopBtn = document.querySelector("#stop");
// "msg" object takes text input from ".text" property. So, link "text__info" with it
msg.text = document.querySelector("#text__info").value;

function set_voice()
{
	msg.voice = voices.find(voice =>
		{
			if(this.value.includes(voice.name))
			{
				console.log(voice);
				return (voice);
			}
		})
	talk();
}

function collect_voices()
{
	// Collects voice from "speechSynthesis" object
	voices = this.getVoices();
	// Filter the english language voices and use it as options
	voicesMenu.innerHTML = voices.filter(language =>
		{
			return language.lang.includes("en");
		})
		.map(voice =>
		{
			return `<option>${voice.name} (${voice.lang})</option>`;
		}).join("");
}
function update_voice()
{
	msg[this.name] = this.value;
	talk();
}
function talk()
{
	// Stops Current Speech
	speechSynthesis.cancel();
	// Pass "msg" utterrance to be spoken by "speechSynthesis"
	speechSynthesis.speak(msg);
}
function stop()
{
	speechSynthesis.cancel();
}

stopBtn.addEventListener("click", stop);
speakBtn.addEventListener("click", talk);
controls.forEach(controls => controls.addEventListener('change', update_voice));

// "voiceschanges" is fired when "speechSynthesis" loads
speechSynthesis.addEventListener("voiceschanged", collect_voices);
voicesMenu.addEventListener("change", set_voice);