const apiKey = '';
const inputValue = document.querySelector('.input');
const buttonElement = document.querySelector('.button');
const galleryElement = document.querySelector('.gallery');
const errorMessageElement = document.querySelector('.errorMessage');

const fetchImages = async () => {
	if (inputValue.value > 10 || inputValue.value < 1) {
		errorMessageElement.innerText = 'Number should be between 1 and 10';
		errorMessageElement.style.display = 'block';
		return;
	}
	let imagesElement = '';

	try {
		buttonElement.style.display = 'none';
		const loadingSpinnerElement = '<img src="./spinner.svg"/>';
		galleryElement.innerHTML = loadingSpinnerElement;

		const fetchURL = `https://api.unsplash.com/photos?per_page=${inputValue.value}&page=${Math.round(
			Math.random() * 1000
		)}&client_id=${APIKey}`;

		await fetch(fetchURL)
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					data.forEach((picture) => {
						imagesElement += `<img src=${picture.urls.small} alt="image" />`;
					});
					galleryElement.style.display = 'block';
					galleryElement.innerHTML = imagesElement;
					buttonElement.style.display = 'inline-block';
					errorMessageElement.style.display = 'none';
				}
			});
	} catch (error) {
		console.log(error);
		errorMessageElement.innerText = 'An error happened, try again later';
		errorMessageElement.style.display = 'block';
		buttonElement.style.display = 'inline-block';
		galleryElement.style.display = 'none';
	}
};

buttonElement.addEventListener('click', fetchImages);
