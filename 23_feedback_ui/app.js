const containerElement = document.querySelector('.container');
const ratingElements = document.querySelectorAll('.rating');
const buttonElement = document.querySelector('.button');

let selectedRating = '';

const removeActive = () => {
	ratingElements.forEach((ratingElement) => {
		ratingElement.classList.remove('active');
	});
};

ratingElements.forEach((ratingElement) => {
	ratingElement.addEventListener('click', (event) => {
		removeActive();
		selectedRating = event.target.innerText || event.target.parentNode.innerText;
		event.target.classList.add('active');
		event.target.parentNode.classList.add('active');
	});
});

buttonElement.addEventListener('click', () => {
	if (selectedRating !== '') {
		containerElement.innerHTML = `
    <strong>Thank you!</strong>
    <br>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support.</p>
    `;
	}
});
