const imageContainerElement = document.querySelector('.image-container');
const buttonElement = document.querySelector('.button');
const imageNumber = 10;

const addNewImages = (imageNumber) => {
	for (let i = 0; i < imageNumber; i++) {
		const newImageElement = document.createElement('img');
		newImageElement.src = `https://picsum.photos/300?random=${Math.ceil(Math.random() * 200)}`;
		imageContainerElement.appendChild(newImageElement);
	}
};

buttonElement.addEventListener('click', () => {
	addNewImages(imageNumber);
});
