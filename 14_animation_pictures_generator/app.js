const buttonElement = document.querySelector('.button');
const animationContainerElement = document.querySelector('.animation-container');
const animationImageElement = document.querySelector('.animation-image');
const animationNameElement = document.querySelector('.animation-name');

buttonElement.addEventListener('click', async () => {
	try {
		buttonElement.disabled = true;
		buttonElement.innerText = 'Loading...';
		animationNameElement.innerText = 'Updating...';
		animationImageElement.src = 'spinner.svg';
		const response = await fetch('https://api.catboys.com/img');
		const data = await response.json();
		buttonElement.disabled = false;
		buttonElement.innerText = 'Get Anime';
		animationContainerElement.style.display = 'block';
		animationImageElement.src = data.url;
		animationNameElement.innerText = data.artist;
	} catch (error) {
		console.log(error);
		buttonElement.disabled = false;
		buttonElement.innerText = 'Get Anime';
		animationNameElement.innerText = 'An error happened, please try again';
	}
});
