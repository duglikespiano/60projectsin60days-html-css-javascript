const yearElement = document.querySelector('.year');
const dayElement = document.querySelector('.day');
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const thisYear = new Date().getFullYear();
const newYear = thisYear + 1;
const newYearDate = new Date(`Jan 1, ${newYear.toString()} 00:00:00`).getTime();
yearElement.innerText = newYear;

const updateCountdown = () => {
	const now = new Date().getTime();
	const gap = newYearDate - now;

	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	const d = Math.floor(gap / day);
	const h = Math.floor((gap % day) / hour);
	const m = Math.floor((gap % hour) / minute);
	const s = Math.floor((gap % minute) / second);

	dayElement.innerText = d;
	hourElement.innerText = h;
	minuteElement.innerText = m;
	secondElement.innerText = s;
};

setInterval(() => {
	updateCountdown();
}, 1000);

updateCountdown();
