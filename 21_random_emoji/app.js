const apiURI = 'https://emoji-api.com/emojis?access_key=';
const apiKey = '';
const buttonElement = document.querySelector('.button');
const emojiNameElement = document.querySelector('.emoji-name');

const emoji = [];

const getEmoji = async () => {
	const response = await fetch(`${apiURI}${apiKey}`);
	const data = await response.json();

	for (let i = 0; i < 1500; i++) {
		emoji.push({
			emojiName: data[i].character,
			emojiCode: data[i].unicodeName,
		});
	}
};

getEmoji();

buttonElement.addEventListener('click', () => {
	if (emoji.length !== 0) {
		const randomNumber = Math.floor(Math.random() * emoji.length);
		buttonElement.innerText = emoji[randomNumber].emojiName;
		emojiNameElement.innerText = emoji[randomNumber].emojiCode;
	}
});
