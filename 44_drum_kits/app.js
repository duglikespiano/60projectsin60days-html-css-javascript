const kits = ['crash', 'kick', 'snare', 'tom'];
const containerElement = document.querySelector('.container');

kits.forEach((kit) => {
	const buttonElement = document.createElement('button');
	buttonElement.classList.add('button');
	buttonElement.innerText = kit;
	buttonElement.style.backgroundImage = `url(images/${kit}.png)`;
	const audioElement = document.createElement('audio');
	audioElement.src = `sounds/${kit}.mp3`;
	containerElement.appendChild(buttonElement);
	containerElement.appendChild(audioElement);
	buttonElement.addEventListener('click', () => {
		audioElement.play();
	});
	window.addEventListener('keydown', (event) => {
		if (event.key === kit.slice(0, 1)) {
			audioElement.play();
			buttonElement.style.transform = 'scale(0.9)';
			setTimeout(() => {
				buttonElement.style.transform = 'scale(1)';
			}, 100);
		}
	});
});
