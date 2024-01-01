'use strict';

const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const ampmElement = document.querySelector('.ampm');

const updateClock = () => {
	let hours = new Date().getHours();
	let minutes = new Date().getMinutes();
	let seconds = new Date().getSeconds();
	let ampm = 'AM';

	hours = hours < 10 ? `0${hours}` : hours;
	minutes = minutes < 10 ? `0${minutes}` : minutes;
	seconds = seconds < 10 ? `0${seconds}` : seconds;

	if (hours > 12) {
		hours = hours - 12;
		ampm = 'PM';
	}

	hoursElement.innerText = hours;
	minutesElement.innerText = minutes;
	secondsElement.innerText = seconds;
	ampmElement.innerText = ampm;

	setTimeout(() => {
		updateClock();
	}, 1000);
};

updateClock();
