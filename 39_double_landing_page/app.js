const containerElement = document.querySelector('.container');
const leftElement = document.querySelector('.left');
const rightElement = document.querySelector('.right');

leftElement.addEventListener('mouseenter', () => {
	containerElement.classList.add('active-left');
});

leftElement.addEventListener('mouseleave', () => {
	containerElement.classList.remove('active-left');
});

rightElement.addEventListener('mouseenter', () => {
	containerElement.classList.add('active-right');
});

rightElement.addEventListener('mouseleave', () => {
	containerElement.classList.remove('active-right');
});
