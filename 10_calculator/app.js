const buttonsElement = document.querySelectorAll('button');
const inputFieldElement = document.querySelector('#result');

const appendValue = (buttonValue) => {
	inputFieldElement.value += buttonValue;
};

const calculateResult = () => {
	inputFieldElement.value = eval(inputFieldElement.value);
};

const clearResult = () => {
	inputFieldElement.value = '';
};

buttonsElement.forEach((button) => {
	button.addEventListener('click', () => {
		const buttonValue = button.innerText;
		if (buttonValue === 'C') {
			clearResult();
		} else if (buttonValue === '=') {
			calculateResult();
		} else {
			appendValue(buttonValue);
		}
	});
});
