const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
	const button = question.querySelector('.question-button');
	button.addEventListener('click', () => {
		question.classList.toggle('show-text');
	});
});
