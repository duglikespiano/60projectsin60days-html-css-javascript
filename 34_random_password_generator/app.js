const buttonElement = document.querySelector('.button');
const inputElement = document.querySelector('.input');
const copyIconElement = document.querySelector('.fa-copy');
const alertContainerElement = document.querySelector('.alert-container');

const createPassword = () => {
	const characters = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const passwordLength = 14;
	let password = '';
	for (let i = 0; i < passwordLength; i++) {
		const randomNumber = Math.floor(Math.random() * characters.length);
		password += characters.substring(randomNumber, randomNumber + 1);
	}
	inputElement.value = password;
	alertContainerElement.innerText = `${password} copied!`;
};

const copyPassword = () => {
	if (inputElement.value) {
		inputElement.select();
		// inputElement.setSelectionRange(0, 999);
		navigator.clipboard.writeText(inputElement.value);
		alertContainerElement.classList.add('active');
	}
};

buttonElement.addEventListener('click', () => {
	createPassword();
});

copyIconElement.addEventListener('click', () => {
	copyPassword();
	setTimeout(() => {
		alertContainerElement.classList.remove('active');
	}, 3000);
});
