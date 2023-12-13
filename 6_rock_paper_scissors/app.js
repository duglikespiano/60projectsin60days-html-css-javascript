const buttons = document.querySelectorAll('button');
const resultElement = document.querySelector('#result');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		const result = playRound(button.className, computerPlay());
		resultElement.innerText = result;
	});
});

const computerPlay = () => {
	const choices = ['rock', 'paper', 'scissors'];
	const randomChoice = Math.floor(Math.random() * choices.length);
	return choices[randomChoice];
};

const playRound = (playerSelection, computerSelection) => {
	if (playerSelection === computerSelection) {
		return "It's a tie!";
	} else if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'scissors' && computerSelection === 'papers')
	) {
		playerScore++;
		playerScoreElement.innerText = playerScore;
		return `You win! ${playerSelection} beats ${computerSelection}`;
	} else {
		computerScore++;
		computerScoreElement.innerText = computerScore;
		return `You lose! ${computerSelection} beats ${playerSelection}`;
	}
};
