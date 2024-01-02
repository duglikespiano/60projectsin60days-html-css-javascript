'use strict';

const imagesContainerElement = document.querySelector('.images-container');
const buttonPreviousElement = document.querySelector('.button-previous');
const buttonNextElement = document.querySelector('.button-next');

let x = 0;
let timer;

const updateGallery = () => {
	imagesContainerElement.style.transform = `perspective(1000px) rotateY(${x}deg)`;
	timer = setTimeout(() => {
		x = x - 45;
		updateGallery();
	}, 3000);
};

buttonPreviousElement.addEventListener('click', () => {
	x = x + 45;
	clearTimeout(timer);
	updateGallery();
});

buttonNextElement.addEventListener('click', () => {
	x = x - 45;
	clearTimeout(timer);
	updateGallery();
});

updateGallery();
