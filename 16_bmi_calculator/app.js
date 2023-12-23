const buttonElement = document.querySelector('.button');
const bmiInputElement = document.querySelector('.bmi-result');
const weightConditionElement = document.querySelector('.weight-condition');

const calculateBMI = () => {
	const heightValue = document.querySelector('.height-input').value / 100;
	const weightValue = document.querySelector('.weight-input').value;
	const bmiValue = weightValue / (heightValue * heightValue);
	bmiInputElement.value = bmiValue;

	if (bmiValue < 18.5) {
		weightConditionElement.innerText = 'Under weight';
	} else if (bmiValue >= 30) {
		weightConditionElement.innerText = 'Obesity';
	} else if (bmiValue >= 25 && bmiValue <= 29.9) {
		weightConditionElement.innerText = 'Over weight';
	} else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
		weightConditionElement.innerText = 'Normal weight';
	}
};

buttonElement.addEventListener('click', calculateBMI);
