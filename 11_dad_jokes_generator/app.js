const buttonElement = document.querySelector('.button');
const jokeElement = document.querySelector('.joke');

const apiKey = 'Kk8bsDQKlbh4E4IJnQMkuA==taXQBsu0mTzOOx7B';
const apiRequestLimit = 1;
const url = `https://api.api-ninjas.com/v1/dadjokes?limit=${apiRequestLimit}`;
const fetchOption = {
	headers: {
		'X-Api-Key': apiKey,
		'content-type': 'application/json',
	},
};

const getJoke = async () => {
	try {
		jokeElement.innerText = 'Updating...';
		buttonElement.disabled = true;
		buttonElement.innerText = 'Loading...';

		const response = await fetch(url, fetchOption);
		const data = await response.json();

		jokeElement.innerText = data[0].joke;
		buttonElement.disabled = false;
		buttonElement.innerText = 'Tell me a joke';
	} catch (error) {
		jokeElement.innerText = 'An error happened, try again later';
		console.error(error);
	}
};

buttonElement.addEventListener('click', getJoke);
