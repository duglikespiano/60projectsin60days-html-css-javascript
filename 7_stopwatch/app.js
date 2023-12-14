const timerElement = document.querySelector('#timer');
const startButtonElement = document.querySelector('#start');
const stopButtonElement = document.querySelector('#stop');
const resetButtonElement = document.querySelector('#reset');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const startTimer = () => {
	startTime = Date.now() - elapsedTime;
	timerInterval = setInterval(() => {
		elapsedTime = Date.now() - startTime;
		timerElement.innerText = formatTime(elapsedTime);
	}, 10);
	startButtonElement.disabled = true;
	stopButtonElement.disabled = false;
};
const stopTimer = () => {
	clearInterval(timerInterval);
	startButtonElement.disabled = false;
	stopButtonElement.disabled = true;
};

const resetTimer = () => {
	clearInterval(timerInterval);
	elapsedTime = 0;
	timerElement.textContent = '00:00:00';
	startButtonElement.disabled = false;
	stopButtonElement.disabled = true;
};

const formatTime = (elapsedTime) => {
	const milliseconds = Math.floor((elapsedTime % 1000) / 10);
	const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
	const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
	const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
	return (
		(hours ? (hours > 9 ? hours : '0' + hours) : '00') +
		':' +
		(minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') +
		':' +
		(seconds ? (seconds > 9 ? seconds : '0' + seconds) : '00') +
		'.' +
		(milliseconds > 9 ? milliseconds : '0' + milliseconds)
	);
};

startButtonElement.addEventListener('click', startTimer);
stopButtonElement.addEventListener('click', stopTimer);
resetButtonElement.addEventListener('click', resetTimer);
