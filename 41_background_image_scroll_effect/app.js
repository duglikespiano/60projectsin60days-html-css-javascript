const backgroundImageElement = document.querySelector('.background-image');

const updateImage = () => {
	backgroundImageElement.style.opacity = 1 - window.scrollY / 900;
	backgroundImageElement.style.backgroundSize = `${160 - window.scrollY / 12}%`;
};

window.addEventListener('scroll', () => {
	updateImage();
});
