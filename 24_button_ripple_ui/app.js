const buttonElement = document.querySelector('.button');

buttonElement.addEventListener('mouseover', (event) => {
	const positionX = event.pageX - buttonElement.offsetLeft;
	const positionY = event.pageY - buttonElement.offsetTop;
	buttonElement.style.setProperty('--position-x', `${positionX}px`);
	buttonElement.style.setProperty('--position-y', `${positionY}px`);
});
