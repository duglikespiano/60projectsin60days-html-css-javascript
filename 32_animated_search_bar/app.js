const searchBarContainerElement = document.querySelector('.search-bar-container');
const magnifierElement = document.querySelector('.magnifier-image');
const microphoneElement = document.querySelector('.microphone-image');

magnifierElement.addEventListener('click', () => {
	searchBarContainerElement.classList.toggle('active');
});
