const bodyElement = document.querySelector('body');

bodyElement.addEventListener('mousemove', (event) => {
	const xPosition = event.offsetX;
	const yPosition = event.offsetY;
	const spanElement = document.createElement('span');
	spanElement.style.left = `${xPosition}px`;
	spanElement.style.top = `${yPosition}px`;
	const randomSize = Math.random() * 100;
	spanElement.style.width = `${randomSize}px`;
	spanElement.style.height = `${randomSize}px`;
	bodyElement.appendChild(spanElement);
	setTimeout(() => {
		spanElement.remove();
	}, 1000);
});
