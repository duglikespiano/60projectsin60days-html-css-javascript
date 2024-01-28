const buttonElement = document.querySelector('button');
const closeIconElement = document.querySelector('.close-icon');
const trailerContainerElement = document.querySelector('.trailer-container');
const videoElement = document.querySelector('video');

buttonElement.addEventListener('click', () => {
	trailerContainerElement.classList.remove('active');
});

closeIconElement.addEventListener('click', () => {
	trailerContainerElement.classList.add('active');
	videoElement.pause();
	videoElement.currentTime = 0;
});
