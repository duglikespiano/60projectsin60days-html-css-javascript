const questionElement = document.querySelector('.question');
const formElement = document.querySelector('.form');
const inputElement = document.querySelector('.input');
const scoreElement = document.querySelector('.score');
let correctAnswer;
let score = JSON.parse(sessionStorage.getItem('score'));
if (!score) {
	score = 0;
}

const updateQuestion = () => {
	const number1 = Math.ceil(Math.random() * 10);
	const number2 = Math.ceil(Math.random() * 10);
	correctAnswer = number1 * number2;
	questionElement.innerText = `What is ${number1} multiply ${number2}?`;
	scoreElement.innerText = `score: ${score}`;
};

const updateSessionStorage = () => {
	sessionStorage.setItem('score', JSON.stringify(score));
};

formElement.addEventListener('submit', (event) => {
	event.preventDefault();
	const userAnswer = +inputElement.value;
	if (userAnswer === correctAnswer) {
		score++;
	} else {
		score--;
		if (score < 0) {
			score = 0;
		}
	}
	inputElement.value = '';
	updateQuestion();
	updateSessionStorage();
});

updateQuestion();
