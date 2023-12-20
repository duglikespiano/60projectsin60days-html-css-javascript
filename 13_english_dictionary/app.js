const inputElement = document.querySelector('.input');
const infoTextElement = document.querySelector('.info-text');
const meaningContainer = document.querySelector('.meaning-container');
const titleElement = document.querySelector('.title');
const meaningElement = document.querySelector('.meaning');
const audioElement = document.querySelector('audio');

const fetchAPI = async (word) => {
	const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
	try {
		infoTextElement.style.display = 'block';
		meaningContainer.style.display = 'none';
		infoTextElement.innerText = `Searching the meaning of "${word}"...`;

		const response = await fetch(url);
		const data = await response.json();

		if (data.title) {
			meaningContainer.style.display = 'block';
			infoTextElement.style.display = 'none';
			titleElement.innerText = word;
			meaningElement.innerText = 'N/A';
			audioElement.style.display = 'none';
		} else {
			meaningContainer.style.display = 'block';
			infoTextElement.style.display = 'none';
			audioElement.style.display = 'inline-flex';
			titleElement.innerText = data[0].word;
			meaningElement.innerText = data[0].meanings[0].definitions[0].definition;
			audioElement.src = data[0].phonetics[0].audio;
		}
	} catch (error) {
		infoTextElement.innerText = `An error happened, try again later`;
		console.error(error);
	}
};

inputElement.addEventListener('keyup', (event) => {
	if (event.target.value && event.key === 'Enter') {
		fetchAPI(event.target.value);
	}
});
