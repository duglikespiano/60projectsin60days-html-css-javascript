const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');

const updateClock = () => {
	const currentDate = new Date();
	const hour = currentDate.getHours();
	const minute = currentDate.getMinutes();
	const second = currentDate.getSeconds();
	const hourDegrees = (hour / 12) * 360;
	const minuteDegrees = (minute / 60) * 360;
	const secondDegrees = (second / 60) * 360;
	hourElement.style.transform = `rotate(${hourDegrees}deg)`;
	minuteElement.style.transform = `rotate(${minuteDegrees}deg)`;
	secondElement.style.transform = `rotate(${secondDegrees}deg)`;
};

setInterval(updateClock, 1000);
