const containerElement = document.querySelector('.container');
const buttonElement = document.querySelector('.button');
const popupContainerElement = document.querySelector('.popup-container');
const closeIconElement = document.querySelector('.close-icon');

buttonElement.addEventListener('click', () => {
	containerElement.classList.add('active');
	popupContainerElement.classList.remove('active');
});

closeIconElement.addEventListener('click', () => {
	containerElement.classList.remove('active');
	popupContainerElement.classList.add('active');
});
