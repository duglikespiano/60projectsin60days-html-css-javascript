const startElement = document.querySelector('#start');
const stopElement = document.querySelector('#stop');
const resetElement = document.querySelector('#reset');
const timerElement = document.querySelector('#timer');

let interval;
let timeLeft = 1500;

const updateTimer = () => {
	let minutes = Math.floor(timeLeft / 60);
	let seconds = timeLeft % 60;
	let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	timerElement.innerHTML = formattedTime;
};

const startTimer = () => {
	interval = setInterval(() => {
		timeLeft--;
		updateTimer();
		if (timeLeft === -1) {
			clearInterval(interval);
			alert("Time's up!");
			timerElement.innerHTML = `25:00`;
			timeLeft = 1500;
		}
	}, 1000);
};

const stopTimer = () => {
	clearInterval(interval);
};

const resetTimer = () => {
	clearInterval(interval);
	timerElement.innerHTML = `25:00`;
	timeLeft = 1500;
};

startElement.addEventListener('click', startTimer);
stopElement.addEventListener('click', stopTimer);
resetElement.addEventListener('click', resetTimer);
