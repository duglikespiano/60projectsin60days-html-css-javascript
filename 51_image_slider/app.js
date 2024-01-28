const imageContainerElement = document.querySelector('.image-container');
const imageElements = document.querySelectorAll('img');
const nextElement = document.querySelector('.next');
const previousElement = document.querySelector('.previous');
let currentImageIndex = 1;
let timeout;

const updateImage = () => {
	if (currentImageIndex > imageElements.length) {
		currentImageIndex = 1;
	} else if (currentImageIndex < 1) {
		currentImageIndex = imageElements.length;
	}
	imageContainerElement.style.transform = `translateX(-${(currentImageIndex - 1) * 500}px)`;
	timeout = setTimeout(() => {
		currentImageIndex++;
		updateImage();
	}, 3000);
};

nextElement.addEventListener('click', () => {
	currentImageIndex++;
	clearTimeout(timeout);
	updateImage();
});

previousElement.addEventListener('click', () => {
	currentImageIndex--;
	clearTimeout(timeout);
	updateImage();
});

updateImage();
