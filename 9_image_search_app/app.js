const accessKey = 'ybaGS0aIwHJYbd_UYpOJbC49t3MhC8RsKwaxwL3rugw';
const formElement = document.querySelector('form');
const searchInputElement = document.querySelector('#search-input');
const searchResultsElement = document.querySelector('.search-results');
const showMoreButton = document.querySelector('#show-more-button');
let inputData;
let imageSearchPage = 1;

const searchImages = async () => {
	inputData = searchInputElement.value;
	const url = `https://api.unsplash.com/search/photos?page=${imageSearchPage}&query=${inputData}&client_id=${accessKey}`;
	const response = await fetch(url);
	const data = await response.json();
	if (imageSearchPage === 1) {
		searchResultsElement.innerHTML = '';
	}
	const results = data.results;

	results.map((result) => {
		const imageWrapper = document.createElement('div');
		imageWrapper.classList.add('search-result');
		const image = document.createElement('img');
		image.src = result.urls.small;
		image.alt = result.alt_description;
		const imageLink = document.createElement('a');
		imageLink.href = result.links.html;
		imageLink.target = '_blank';
		imageLink.innerText = result.alt_description;

		imageWrapper.appendChild(image);
		imageWrapper.appendChild(imageLink);
		searchResultsElement.appendChild(imageWrapper);
	});

	imageSearchPage++;

	if (imageSearchPage > 1) {
		showMoreButton.style.display = 'block';
	}
};

formElement.addEventListener('submit', (event) => {
	event.preventDefault();
	imageSearchPage = 1;
	searchImages();
});

showMoreButton.addEventListener('click', () => {
	searchImages();
});
