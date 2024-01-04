const containerElement = document.querySelector('.container');
for (let i = 0; i < 30; i++) {
	const colorContainerElement = document.createElement('div');
	colorContainerElement.classList.add('color-container');
	containerElement.appendChild(colorContainerElement);
}

const randomColor = () => {
	const characters = '0123456789abcdef';
	const colorCodeLength = 6;
	let colorCode = '';

	for (let i = 0; i < colorCodeLength; i++) {
		const randomNumber = Math.floor(Math.random() * characters.length);
		colorCode += characters.substring(randomNumber, randomNumber + 1);
	}
	return colorCode;
};

const colorContainersElements = document.querySelectorAll('.color-container');
const generateColors = () => {
	colorContainersElements.forEach((colorContainerElement) => {
		const newColorCode = randomColor();
		colorContainerElement.style.backgroundColor = `#${newColorCode}`;
		colorContainerElement.innerText = `#${newColorCode}`;
	});
};

randomColor();
generateColors();
