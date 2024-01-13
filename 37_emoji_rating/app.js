const starElements = document.querySelectorAll('.fa-star');
const emojiElements = document.querySelectorAll('.far');
const colorsArray = ['red', 'orange', 'lightblue', 'lightgreen', 'green'];

const updateRating = (i) => {
	starElements.forEach((starElement, index) => {
		if (index < i + 1) {
			starElement.classList.add('active');
		} else {
			starElement.classList.remove('active');
		}
	});
	emojiElements.forEach((emojiElement) => {
		emojiElement.style.transform = `translateX(-${i * 50}px)`;
		emojiElement.style.color = colorsArray[i];
	});
};

starElements.forEach((starElement, i) => {
	starElement.addEventListener('click', () => {
		updateRating(i);
	});
});

updateRating(2);
