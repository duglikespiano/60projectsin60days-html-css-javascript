const monthNameElement = document.querySelector('.month-name');
const dayNameElement = document.querySelector('.day-name');
const dayNumberElement = document.querySelector('.day-number');
const yearElement = document.querySelector('.year');
const date = new Date();

monthNameElement.innerText = date.toLocaleString('en', {
	month: 'long',
});
dayNameElement.innerText = date.toLocaleString('en', {
	weekday: 'long',
});
dayNumberElement.innerText = date.getDate();
yearElement.innerText = date.getFullYear();
