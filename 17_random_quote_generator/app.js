const buttonElement = document.querySelector('.button');
const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.author');
const apiURL = 'https://api.quotable.io/random';

const getQuote = async () => {
	try {
		quoteElement.style.display = 'block';
		authorElement.style.display = 'block';
		quoteElement.innerText = 'Loading...';
		buttonElement.disabled = true;
		buttonElement.innerText = 'Loading...';
		const response = await fetch(apiURL);
		const data = await response.json();
		const quoteContent = data.content;
		const quoteAuthor = `~ ${data.author}`;
		quoteElement.innerText = quoteContent;
		authorElement.innerText = quoteAuthor;
		buttonElement.innerText = 'Get a quote';
		buttonElement.disabled = false;
	} catch (error) {
		console.error(error);
		quoteElement.innerText = `An error happened, try again later`;
		buttonElement.disabled = false;
	}
};

buttonElement.addEventListener('click', getQuote);
